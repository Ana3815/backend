/** Se va atrabajar todo lo que es referente a crear una nueva perfil */
/**next dar paso a otra seccion */

import Perfil from "../models/Perfil.js";

/**GUARDAR LOS DATOS DE LAS PERFIL  */
export const createPerfil = async (req,res,next) => {
    const newPerfil = new Perfil(req.body);
    try {
        const saved = await newPerfil.save();  /**guardame esa perfil con los datos que esten body */
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**ACTUALIZAR DATOS DE LAS PERFIL  */
export const updatePerfil = async(req, res) =>{
    try {
        const perfil = await Perfil.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})  /**actualizar las perfil   */
        res.status(200).json(perfil);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER TODOS LOS DATOS GUARDADOS DE PERFIL  */
export const getPerfil = async(req, res) =>{ //traer todos los datos de las perfiles
    try {
        const all = await Perfil.find();  
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
export const getPerfilById = async(req, res) =>{ //traer solo un dato de perfiles
    try {
        const perfil = await Perfil.findById(req.params.id);  
        res.status(perfil?200:400).json(perfil?perfil:{});
    } catch (error) {
        res.status(500).json({"message":error.message});  
    }
}

/**ELIMINAR  DATOS DE PERFIL  */
export const deletePerfilById = async(req, res) =>{
    try {
        await Perfil.findByIdAndDelete(req.params.id)  /**eliminar  las perfiles   */
        res.status(200).json({"mensaje":"Eliminado con exito!!"});
    } catch (error) {
        res.status(500).json(error);  
    }
}