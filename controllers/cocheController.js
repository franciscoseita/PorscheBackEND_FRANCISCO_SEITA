const Coche = require('../models/cocheModel');

// Controlador para crear un nuevo coche
const crearCoche = async (req, res) => {
  try {
    const { nombre, modelo, caracteristicas } = req.body;
    const nuevoCoche = new Coche({ nombre, modelo, caracteristicas });
    await nuevoCoche.save();
    res.status(201).json({ mensaje: 'Coche creado exitosamente', coche: nuevoCoche });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los coches
const obtenerCoches = async (req, res) => {
  try {
    const coches = await Coche.find();
    res.json(coches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un coche por su ID
const obtenerCochePorId = async (req, res) => {
  try {
    const coche = await Coche.findById(req.params.id);
    if (!coche) {
      return res.status(404).json({ mensaje: 'Coche no encontrado' });
    }
    res.json(coche);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un coche por su ID
const actualizarCoche = async (req, res) => {
  try {
    const { nombre, modelo, caracteristicas } = req.body;
    const cocheActualizado = await Coche.findByIdAndUpdate(req.params.id, { nombre, modelo, caracteristicas }, { new: true });
    if (!cocheActualizado) {
      return res.status(404).json({ mensaje: 'Coche no encontrado' });
    }
    res.json({ mensaje: 'Coche actualizado exitosamente', coche: cocheActualizado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un coche por su ID
const eliminarCoche = async (req, res) => {
  try {
    const cocheEliminado = await Coche.findByIdAndDelete(req.params.id);
    if (!cocheEliminado) {
      return res.status(404).json({ mensaje: 'Coche no encontrado' });
    }
    res.json({ mensaje: 'Coche eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearCoche,
  obtenerCoches,
  obtenerCochePorId,
  actualizarCoche,
  eliminarCoche
};
