import express from 'express'
// import { verifyUser } from '../utils/verifyToken.js';
import { createCandidato, deleteCandidatoById, getCandidato, getCandidatoById, updateCandidato, } from '../controllers/candidatosController.js';

const router = express.Router();
//va amanejar todas la rutas de autoidentificacion 

/**GUARDAR LOS DATOS DE LAS CANDIDATOS */
router.post("/", createCandidato); /**traer el controlador */

/**TRAER TODOS LOS DATOS GUARDADOS DE CANDIDATOS */
router.get("/", getCandidato);

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
router.get("/:id", getCandidatoById);

/**ACTUALIZAR DATOS DE LAS CANDIDATOS */
router.put("/:id",updateCandidato);

/**ELIMINAR  DATOS DE CANDIDATOS */
router.delete("/:id",deleteCandidatoById);

export default router;