import express from 'express'
import { createTipoEleccion, deleteTipoEleccionById, getTipoEleccion, getTipoEleccionById, updateTipoEleccion } from '../controllers/tipoeleccionController.js';
// import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//va amanejar todas la rutas de autoidentificacion 

/**GUARDAR LOS DATOS DE LAS TIPO ELECCIONES */
router.post("/", createTipoEleccion); /**traer el controlador */

/**TRAER TODOS LOS DATOS GUARDADOS DE TIPO ELECCIONES */
router.get("/", getTipoEleccion);

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
router.get("/:id",getTipoEleccionById);

/**ACTUALIZAR DATOS DE LAS TIPO ELECCIONES */
router.put("/:id",updateTipoEleccion);

/**ELIMINAR  DATOS DE TIPO ELECCIONES */
router.delete("/:id",deleteTipoEleccionById);

export default router;