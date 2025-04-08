const express = require('express');
const cors = require('cors');
const app = express();
const usuariosRoutes = require('./routes/usuarios');

app.use(cors());
app.use(express.json());

app.use('/api', usuariosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
