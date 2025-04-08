const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/usuarios', (req, res) => {
  const { nome, email, telefone, sexo, data_nascimento, profissao, estado_civil, endereco } = req.body;

  const query = `
    INSERT INTO usuarios (nome, email, telefone, sexo, data_nascimento, profissao, estado_civil, endereco)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [nome, email, telefone, sexo, data_nascimento, profissao, estado_civil, endereco], (err, results) => {
    if (err) {
      console.error('Erro ao inserir usuário:', err);
      res.status(500).json({ erro: 'Erro ao inserir usuário' });
    } else {
      res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
    }
  });
});


router.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      res.status(500).json({ erro: 'Erro ao buscar usuários' });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
