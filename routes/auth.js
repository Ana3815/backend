import express from 'express'
import { login, register } from '../controllers/auth.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//ruta de registrar
router.use(register);
/**GUARDAR LOS DATOS DE LAS ELECCIONES */
router.post("/register", register); 
/**traer el controlador */
router.post("/login", login); /**traer el controlador */
// router.get("/verifyToken", verifyToken); /**ruta de verificar token */
router.use(verifyToken);



router.get("/verifyToken", (req, res) => {
    res.status(200).json({ message: "Token válido" });
});

router.get("/editar/:id", verifyUser,(req,res,next)=>{
    res.json({mensaje:"Puedes editar"});
    
}); /** */


export default router;