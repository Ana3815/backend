import express from 'express'
import { login, register } from '../controllers/auth.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//ruta de registrar

/**GUARDAR LOS DATOS DE LAS ELECCIONES */
router.post("/register", register); /**traer el controlador */
router.post("/login", login); /**traer el controlador */
router.get("/verifyToken", verifyToken); /**ruta de verificar token */
router.get("/editar/:id", verifyUser,(req,res,next)=>{
    res.json({mensaje:"Puedes editar"});
    
}); /** */


export default router;