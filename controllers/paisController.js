/** Se va atrabajar todo lo que es referente a crear una nueva paises*/
/**next dar paso a otra seccion */

import Pais from "../models/Pais.js";

/**GUARDAR LOS DATOS DE LAS PAIS */
export const createPais = async (req,res,next) => {
    const newPais = new Pais(req.body);
    try {
        const saved = await newPais.save();  /**guardame esa paises con los datos que esten body */
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**ACTUALIZAR DATOS DE LAS PAIS */
export const updatePais = async(req, res) =>{
    try {
        const pais = await Pais.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})  /**actualizar las paises   */
        res.status(200).json(pais);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER TODOS LOS DATOS GUARDADOS DE PAIS */
export const getPais = async(req, res) =>{ //traer todos los datos de las paises
    try {
        const all = await Pais.find();  
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
export const getPaisById = async(req, res) =>{ //traer solo un dato de paises
    try {
        const pais = await Pais.findById(req.params.id);  
        res.status(pais?200:400).json(pais?pais:{});
    } catch (error) {
        res.status(500).json({"message":error.message});  
    }
}

/**ELIMINAR  DATOS DE PAIS */
export const deletePaisById = async(req, res) =>{
    try {
        await Pais.findByIdAndDelete(req.params.id)  /**eliminar  las paises   */
        res.status(200).json({"mensaje":"Eliminado con exito!!"});
    } catch (error) {
        res.status(500).json(error);  
    }
}