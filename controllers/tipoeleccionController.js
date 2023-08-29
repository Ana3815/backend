/** Se va atrabajar todo lo que es referente a crear una nueva Tipo de eleciones*/
/**next dar paso a otra seccion */

import TipoEleccion from "../models/TipoEleccion.js";

/**GUARDAR LOS DATOS DE LAS TIPO ELECCIONES */
export const createTipoEleccion = async (req,res,next) => {
    const newTipoEleccion = new TipoEleccion(req.body);
    try {
        const saved = await newTipoEleccion.save();  /**guardame esa eleccion con los datos que esten body */
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**ACTUALIZAR DATOS DE LAS TIPO ELECCIONES */
export const updateTipoEleccion = async(req, res) =>{
    try {
        const tipoeleccion = await TipoEleccion.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})  /**actualizar las eleccionesv   */
        res.status(200).json(tipoeleccion);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER TODOS LOS DATOS GUARDADOS DE TIPO ELECCIONES */
export const getTipoEleccion = async(req, res) =>{ //traer todos los datos de las elecciones
    try {
        const all = await TipoEleccion.find();  
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
export const getTipoEleccionById = async(req, res) =>{ //traer solo un dato de elecciones
    try {
        const tipoeleccion = await TipoEleccion.findById(req.params.id);  
        res.status(tipoeleccion?200:400).json(tipoeleccion?tipoeleccion:{});
    } catch (error) {
        res.status(500).json({"message":error.message});  
    }
}

/**ELIMINAR  DATOS DE TIPO ELECCIONES */
export const deleteTipoEleccionById = async(req, res) =>{
    try {
        await TipoEleccion.findByIdAndDelete(req.params.id)  /**eliminar  las eleccionesv   */
        res.status(200).json({"mensaje":"Eliminado con exito!!"});
    } catch (error) {
        res.status(500).json(error);  
    }
}