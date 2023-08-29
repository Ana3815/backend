import express from 'express'
import { createPerfil, deletePerfilById, getPerfil, getPerfilById, updatePerfil } from '../controllers/perfilController.js';
// import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//va amanejar todas la rutas de autoidentificacion 

/**GUARDAR LOS DATOS DE LAS PERFILES */
router.post("/", createPerfil); /**traer el controlador */

/**TRAER TODOS LOS DATOS GUARDADOS DE PERFILES */
router.get("/", getPerfil);

/**TRAER UN SOLO DATO POR MEDIO DEL ID */
router.get("/:id", getPerfilById);

/**ACTUALIZAR DATOS DE LAS PERFILES */
router.put("/:id",updatePerfil);

/**ELIMINAR  DATOS DE PERFILES */
router.delete("/:id",deletePerfilById);

export default router;