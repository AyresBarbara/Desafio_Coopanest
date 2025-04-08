const express = require('express');
const cors = require('cors');
const app = express();
const usuariosRoutes = require('./routes/usuarios');

app.use(cors());
app.use(express.json());

app.use('/usuarios', usuariosRoutes);

app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});
