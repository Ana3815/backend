/** Se va atrabajar todo lo que es referente a crear una nueva Inscripcion*/
/**next dar paso a otra seccion */

import Inscripcion from "../models/Inscripcion.js";

/**GUARDAR LOS DATOS DE LAS INSCRIPCIONES */
export const createInscripcion = async (req,res,next) => {
    const newInscripcion = new Inscripcion(req.body);
    try {
        const saved = await newInscripcion.save();  /**guardame esa inscripciones con los datos que esten body */
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**ACTUALIZAR DATOS DE LAS INSCRIPCIONES */
export const updateInscripcion = async(req, res) =>{
    try {
        const inscripcion = await Inscripcion.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})  /**actualizar las inscripciones   */
        res.status(200).json(inscripcion);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER TODOS LOS DATOS GUARDADOS DE INSCRIPCIONES */
export const getInscripcion = async(req, res) =>{ //traer todos los datos de las inscripciones
    try {
        const all = await Inscripcion.find();  
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
export const getInscripcionById = async(req, res) =>{ //traer solo un dato de inscripciones
    try {
        const inscripcion = await Inscripcion.findById(req.params.id);  
        res.status(inscripcion?200:400).json(inscripcion?inscripcion:{});
    } catch (error) {
        res.status(500).json({"message":error.message});  
    }
}

/**ELIMINAR  DATOS DE INSCRIPCIONES */
export const deleteInscripcionById = async(req, res) =>{
    try {
        await Inscripcion.findByIdAndDelete(req.params.id)  /**eliminar  las inscripciones   */
        res.status(200).json({"mensaje":"Eliminado con exito!!"});
    } catch (error) {
        res.status(500).json(error);  
    }
}