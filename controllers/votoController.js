/** Se va atrabajar todo lo que es referente a crear una nueva votos*/
/**next dar paso a otra seccion */

import Voto from "../models/Voto.js";

/**GUARDAR LOS DATOS DE LAS VOTOS */
export const createVoto = async (req,res,next) => {
    const newVoto = new Voto(req.body);
    try {
        const saved = await newVoto.save();  /**guardame esa voto con los datos que esten body */
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**ACTUALIZAR DATOS DE LAS VOTOS */
export const updateVoto = async(req, res) =>{
    try {
        const voto = await Voto.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})  /**actualizar las voto   */
        res.status(200).json(voto);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER TODOS LOS DATOS GUARDADOS DE VOTOS */
export const getVoto = async(req, res) =>{ //traer todos los datos de las voto
    try {
        const all = await Voto.find();  
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
export const getVotoById = async(req, res) =>{ //traer solo un dato de voto
    try {
        const voto = await Voto.findById(req.params.id);  
        res.status(voto?200:400).json(voto?voto:{});
    } catch (error) {
        res.status(500).json({"message":error.message});  
    }
}

/**ELIMINAR  DATOS DE VOTOS */
export const deleteVotoById = async(req, res) =>{
    try {
        await Voto.findByIdAndDelete(req.params.id)  /**eliminar  las voto   */
        res.status(200).json({"mensaje":"Eliminado con exito!!"});
    } catch (error) {
        res.status(500).json(error);  
    }
}