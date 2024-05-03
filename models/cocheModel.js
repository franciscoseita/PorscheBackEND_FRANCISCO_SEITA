const mongoose = require('mongoose');

const cocheSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  caracteristicas: {
    type: String,
    required: true
  }
});

const Coche = mongoose.model('Coche', cocheSchema);

module.exports = Coche;
