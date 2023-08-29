/** Se va atrabajar todo lo que es referente a crear un nuevoi Ciudadano*/
/**next dar paso a otra seccion */

import Ciudadano from "../models/Ciudadano.js";

/**GUARDAR LOS DATOS DE LAS CIUDADANO */
export const createCiudadano = async (req,res,next) => {
    const newCiudadano = new Ciudadano(req.body);
    try {
        const saved = await newCiudadano.save();  /**guardame esa Ciudadano con los datos que esten body */
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**ACTUALIZAR DATOS DE LAS CIUDADANO */
export const updateCiudadano = async(req, res) =>{
    try {
        const ciudadano = await Ciudadano.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})  /**actualizar las Ciudadano   */
        res.status(200).json(ciudadano);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER TODOS LOS DATOS GUARDADOS DE CIUDADANO */
export const getCiudadano = async(req, res) =>{ //traer todos los datos de las Ciudadano
    try {
        const all = await Ciudadano.find();  
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json(error);  
    }
}

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
export const getCiudadanoById = async(req, res) =>{ //traer solo un dato de Ciudadano
    try {
        const ciudadano = await Ciudadano.findById(req.params.id);  
        res.status(ciudadano?200:400).json(ciudadano?ciudadano:{});
    } catch (error) {
        res.status(500).json({"message":error.message});  
    }
}

/**ELIMINAR  DATOS DE CIUDADANO */
export const deleteCiudadanoById = async(req, res) =>{
    try {
        await Ciudadano.findByIdAndDelete(req.params.id)  /**eliminar  las Ciudadano   */
        res.status(200).json({"mensaje":"Eliminado con exito!!"});
    } catch (error) {
        res.status(500).json(error);  
    }
}