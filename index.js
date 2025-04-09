require("dotenv").config();

const db = require("./db");

const express = require("express");

const app = express();

app.use(express.json());

app.put("/dados/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    db.atualizarUsuario(id, user);
    resp.sendStatus(200);
})
app.post("/dados", (req, resp) => {
    const user = req.body;
    db.inserirUsuario(user);
    resp.sendStatus(201);

})

app.get("/dados/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    resp.json(db.selecionarUsuarioId(id));
})

app.get("/dados", (req, resp) => {
    resp.json(db.selecionarUsuarios());
})


app.listen(process.env.PORT, () => {
    console.log("App is running!!");
});