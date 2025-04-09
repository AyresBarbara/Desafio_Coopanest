require("dotenv").config();

const db = require("./db");

const express = require("express");

const app = express();

app.use(express.json())

app.put("/dados/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    db.atualizarUsuario(id, user);
    resp.sendStatus(200);
})

app.post("/dados", async (req, resp) => {
    const user = req.body;
    await db.inserirUsuario(user);
    resp.sendStatus(201);

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