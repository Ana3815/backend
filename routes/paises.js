import express from 'express'
import { createPais, deletePaisById, getPais, getPaisById, updatePais } from '../controllers/paisController.js';
// import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//va amanejar todas la rutas de autoidentificacion 

/**GUARDAR LOS DATOS DE LAS PAISES */
router.post("/", createPais); /**traer el controlador */

/**TRAER TODOS LOS DATOS GUARDADOS DE PAISES */
router.get("/", getPais);

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
router.get("/:id", getPaisById);

/**ACTUALIZAR DATOS DE LAS PAISES */
router.put("/:id",updatePais);

/**ELIMINAR  DATOS DE PAISES */
router.delete("/:id",deletePaisById);

export default router;