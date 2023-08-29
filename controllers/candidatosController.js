/** Se va atrabajar todo lo que es referente a crear un nuevo Candidato*/
/**next dar paso a otra seccion */

import Candidato from "../models/Candidato.js";

/**GUARDAR LOS DATOS DE LOS Candidato */
export const createCandidato = async (req,res,next) => {
    const newCandidato = new Candidato(req.body);
    try {
        const saved = await newCandidato.save();  /**guardame esa Candidato con los datos que esten body */
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**ACTUALIZAR DATOS DE LOS Candidato */
export const updateCandidato = async(req, res) =>{
    try {
        const candidato = await Candidato.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})  /**actualizar LOS Candidatos  */
        res.status(200).json(candidato);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER TODOS LOS DATOS GUARDADOS DE Candidato */
export const getCandidato = async(req, res) =>{ //traer todos los datos de LOS Candidatos
    try {
        const all = await Candidato.find();  
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
export const getCandidatoById = async(req, res) =>{ //traer solo un dato de Candidatos
    try {
        const candidato = await Candidato.findById(req.params.id);  
        res.status(candidato?200:400).json(candidato?candidato:{});
    } catch (error) {
        res.status(500).json({"message":error.message});  
    }
}

/**ELIMINAR  DATOS DE Candidato */
export const deleteCandidatoById = async(req, res) =>{
    try {
        await Candidato.findByIdAndDelete(req.params.id)  /**eliminar  LOS Candidatos  */
        res.status(200).json({"mensaje":"Candidato Eliminado con exito!!"});
    } catch (error) {
        res.status(500).json(error);  
    }
}