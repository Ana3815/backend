/** Se va atrabajar todo lo que es referente a crear una nueva eleccion*/
/**next dar paso a otra seccion */

import Eleccion from "../models/Eleccion.js";

/**GUARDAR LOS DATOS DE LAS ELECCIONES */
export const createEleccion = async (req,res,next) => {
    const newEleccion = new Eleccion(req.body);
    try {
        const saved = await newEleccion.save();  /**guardame esa eleccion con los datos que esten body */
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**ACTUALIZAR DATOS DE LAS ELECCIONES */
export const updateEleccion = async(req, res) =>{
    try {
        const eleccion = await Eleccion.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})  /**actualizar las eleccionesv   */
        res.status(200).json(eleccion);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER TODOS LOS DATOS GUARDADOS DE ELECCIONES */
export const getEleccion = async(req, res) =>{ //traer todos los datos de las elecciones
    try {
        const all = await Eleccion.find();  
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
export const getEleccionById = async(req, res) =>{ //traer solo un dato de elecciones
    try {
        const eleccion = await Eleccion.findById(req.params.id);  
        res.status(eleccion?200:400).json(eleccion?eleccion:{});
    } catch (error) {
        res.status(500).json({"message":error.message});  
    }
}

/**ELIMINAR  DATOS DE ELECCIONES */
export const deleteEleccionById = async(req, res) =>{
    try {
        await Eleccion.findByIdAndDelete(req.params.id)  /**eliminar  las eleccionesv   */
        res.status(200).json({"mensaje":"Eliminado con exito!!"});
    } catch (error) {
        res.status(500).json(error);  
    }
}