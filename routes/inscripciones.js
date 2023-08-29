import express from 'express'
import { createInscripcion, deleteInscripcionById, getInscripcion, getInscripcionById, updateInscripcion } from '../controllers/inscripcionController.js';
// import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//va amanejar todas la rutas de autoidentificacion 

/**GUARDAR LOS DATOS DE LAS INSCRIPCIONES */
router.post("/", createInscripcion); /**traer el controlador */

/**TRAER TODOS LOS DATOS GUARDADOS DE INSCRIPCIONES */
router.get("/", getInscripcion);

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
router.get("/:id", getInscripcionById);

/**ACTUALIZAR DATOS DE LAS INSCRIPCIONES */
router.put("/:id",updateInscripcion);

/**ELIMINAR  DATOS DE INSCRIPCIONES */
router.delete("/:id",deleteInscripcionById);

export default router;