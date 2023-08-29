import express from 'express'
import { createVoto, deleteVotoById, getVoto, getVotoById, updateVoto } from '../controllers/votoController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//va amanejar todas la rutas de autoidentificacion 

/**GUARDAR LOS DATOS DE LAS VOTOS */
router.post("/",verifyUser, createVoto); /**traer el controlador */

/**TRAER TODOS LOS DATOS GUARDADOS DE VOTOS */
router.get("/", getVoto);

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
router.get("/:id", getVotoById);

/**ACTUALIZAR DATOS DE LAS VOTOS */
router.put("/:id",verifyUser,updateVoto);

/**ELIMINAR  DATOS DE VOTOS */
router.delete("/:id",verifyUser,deleteVotoById);

export default router;