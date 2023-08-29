import express from 'express'
import { createCiudadano, deleteCiudadanoById, getCiudadano, getCiudadanoById, updateCiudadano } from '../controllers/ciudadanosController.js';
// import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//va amanejar todas la rutas de autoidentificacion 

/**GUARDAR LOS DATOS DE LAS CIUDADANOS */
router.post("/", createCiudadano); /**traer el controlador */

/**TRAER TODOS LOS DATOS GUARDADOS DE CIUDADANOS */
router.get("/", getCiudadano);

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
router.get("/:id", getCiudadanoById);

/**ACTUALIZAR DATOS DE LAS CIUDADANOS */
router.put("/:id",updateCiudadano);

/**ELIMINAR  DATOS DE CIUDADANOS */
router.delete("/:id",deleteCiudadanoById);

export default router;