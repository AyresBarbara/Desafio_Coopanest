const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', (req, res) => {
  const dados = req.body;
  const sql = `
    INSERT INTO usuario_tb 
    (nome_usuario, email_usuario, telefone_usuario, sexo_usuario, data_nascimento_usuario, profissao_usuario, estado_civil_usuario, endereco_usuario) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    dados.nome_usuario,
    dados.email_usuario,
    dados.telefone_usuario,
    dados.sexo_usuario,
    dados.data_nascimento_usuario,
    dados.profissao_usuario,
    dados.estado_civil_usuario,
    dados.endereco_usuario
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Usuário cadastrado com sucesso', id: result.insertId });
  });
});


router.put('/:id', (req, res) => {
  const id = req.params.id;
  const dados = req.body;

  const sql = `
    INSERT INTO usuario_editado_tb 
    (id_usuario, nome_usuario, email_usuario, telefone_usuario, sexo_usuario, data_nascimento_usuario, profissao_usuario, estado_civil_usuario, endereco_usuario, data_edicao) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
  `;
  const values = [
    id,
    dados.nome_usuario,
    dados.email_usuario,
    dados.telefone_usuario,
    dados.sexo_usuario,
    dados.data_nascimento_usuario,
    dados.profissao_usuario,
    dados.estado_civil_usuario,
    dados.endereco_usuario
  ];

  db.query(sql, values, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Edição registrada com sucesso' });
  });
});


router.get('/', (req, res) => {
  db.query('SELECT * FROM usuario_tb', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});


router.get('/editados', (req, res) => {
  db.query('SELECT * FROM usuario_editado_tb', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
