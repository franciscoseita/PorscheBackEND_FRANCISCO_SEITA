const express = require('express');
const router = express.Router();
const cocheController = require('../controllers/cocheController');
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas para las operaciones CRUD de coches
router.post('/coches', cocheController.crearCoche);
router.get('/coches', cocheController.obtenerCoches);
router.get('/coches/:id', cocheController.obtenerCochePorId);
router.put('/coches/:id', cocheController.actualizarCoche);
router.delete('/coches/:id', cocheController.eliminarCoche);

// Rutas para la autenticación de usuarios
router.post('/registro', usuarioController.registrarUsuario);
router.post('/inicio-sesion', usuarioController.iniciarSesion);
router.get('/perfil', authMiddleware, usuarioController.obtenerUsuario);

module.exports = router;
