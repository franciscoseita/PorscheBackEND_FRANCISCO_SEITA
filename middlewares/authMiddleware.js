const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Verificar si se ha proporcionado un token en los headers de la solicitud
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado' });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuarioId = decoded.usuarioId;
    next();
  } catch (error) {
    // Si el token no es válido, devolver un error de acceso no autorizado
    return res.status(401).json({ mensaje: 'Acceso denegado. Token inválido' });
  }
};

module.exports = authMiddleware;
