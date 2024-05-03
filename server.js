const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');



// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Configurar Express
const app = express();
app.use(express.json());

// Conectar a la base de datos de MongoDB usando Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'.cyan))
  .catch(err => console.error(`Error al conectar a MongoDB: ${err.message}`.red));

// Usar las rutas definidas en el archivo routes.js
app.use('/api', require('./routes/routes'));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`.green);
});
