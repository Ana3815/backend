import express from 'express'
import { createEleccion, deleteEleccionById, getEleccion, getEleccionById, updateEleccion } from '../controllers/eleccionesController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//va amanejar todas la rutas de autoidentificacion 

/**GUARDAR LOS DATOS DE LAS ELECCIONES */
router.post("/",verifyUser, createEleccion); /**traer el controlador */

/**TRAER TODOS LOS DATOS GUARDADOS DE ELECCIONES */
router.get("/", getEleccion);

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
router.get("/:id", getEleccionById);

/**ACTUALIZAR DATOS DE LAS ELECCIONES */
router.put("/:id",verifyUser,updateEleccion);

/**ELIMINAR  DATOS DE ELECCIONES */
router.delete("/:id",verifyUser,deleteEleccionById);

export default router;