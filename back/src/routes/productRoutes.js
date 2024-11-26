// import express from 'express';
// import multer from 'multer';
// import { crearProducto } from '../controllers/productController.js'; // Asegúrate de agregar .js

// const router = express.Router();
// const upload = multer({ storage: multer.memoryStorage() });

// // Ruta para crear un nuevo producto
// router.post('/product', upload.single('imagen'), crearProducto);

// export default router; // Usar export default en lugar de module.exports

// import express from 'express';
// import multer from 'multer';
// import { crearProducto } from '../controllers/productController.js';
// import { verificarAdmin } from '../middleware/authMiddleware.js'; // Importa el middleware

// const router = express.Router();
// const upload = multer({ storage: multer.memoryStorage() });

// // Ruta para crear un nuevo producto, solo accesible para administradores
// router.post('/create', verificarAdmin, upload.single('imagen'), crearProducto);

// export default router;
import { Router } from 'express';
import { crearProducto } from '../controllers/productController.js';
import auth from '../middleware/auth.js'; // Middleware de autenticación

const router = Router();

router.post('/products', auth, crearProducto);

export default router;