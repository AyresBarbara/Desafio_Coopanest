require("dotenv").config();

const db = require("./db");
const cors = require('cors');
const express = require("express");

const app = express();

app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json())

app.put("/dados/:id", async (req, resp) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    try {
      await db.atualizarUsuario(id, user);
      resp.status(200).json({ message: 'Usuário atualizado com sucesso!' });
    } catch (error) {
      console.error('Erro no servidor:', error);
      resp.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  });
  
app.post("/dados", async (req, resp) => {
    try {
        const user = req.body;
        await db.inserirUsuario(user);
        resp.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (err) {
        console.error(err);
        resp.status(500).json({ error: 'Erro ao criar usuário' });
    }

})

app.get("/dados/:id",async(req, resp) => {
    const id = parseInt(req.params.id);
    const results = await db.selecionarUsuarioId(id);
    resp.json(results);
})

app.get("/dados", async (req, resp) => {
    const results = await db.selecionarUsuarios();
    resp.json(results);
})


app.listen(process.env.PORT, () => {
    console.log("App is running!!");
});