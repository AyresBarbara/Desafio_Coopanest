require("dotenv").config();

const db = require("./db");

const express = require("express");

const app = express();

app.patch("/usuarios/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    db.atualizarUsuario(id, user);
    resp.sendStatus(200);
})
app.post("/usuarios", (req, resp) => {
    const user = req.body;
    db.inserirUsuario(user);
    resp.sendStatus(201);

})
app.delete("/usuarios/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    db.deletarUsuario(id);
    resp.sendStatus(204);
})

app.get("/usuarios/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    resp.json(db.selecionarUsuarioId(id));
})

app.get("/usuarios", (req, resp) => {
    resp.json(db.selecionarUsuarios());
})

app.get("/", (request, response, next) =>{
    response.json({
        message: "Julinho é lindo"
    })
})

app.listen(process.env.PORT, () => {
    console.log("App is running!!");
});