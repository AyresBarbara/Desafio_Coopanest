CREATE DATABASE coopanest_db;

USE coopanest_db;

CREATE TABLE usuario_tb(
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome_usuario VARCHAR(100) NOT NULL,
    email_usuario VARCHAR(100) NOT NULL UNIQUE,
    telefone_usuario VARCHAR(20),
    sexo_usuario ENUM('Masculino', 'Feminino', 'Outro') NOT NULL,
    data_nascimento_usuario DATE NOT NULL,
    profissao_usuario VARCHAR(100),
    estado_civil_usuario ENUM('Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'),
    endereco_usuario TEXT
    );