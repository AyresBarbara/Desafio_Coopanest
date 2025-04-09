CREATE DATABASE coopanest_db;

USE coopanest_db;

CREATE TABLE usuario_tb(
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    sexo ENUM('Masculino', 'Feminino', 'Outro') NOT NULL,
    data_nascimento DATE NOT NULL,
    profissao VARCHAR(100),
    estado_civil ENUM('Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'),
    endereco TEXT
    );
    CREATE TABLE usuario_editado_tb (
    id_editado INT AUTO_INCREMENT PRIMARY KEY,
    id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    sexo ENUM('Masculino', 'Feminino', 'Outro') NOT NULL,
    data_nascimento DATE NOT NULL,
    profissao VARCHAR(100),
    estado_civil ENUM('Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'),
    endereco TEXT,
    data_atualizacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario_tb(id_usuario)
);

INSERT INTO usuario_tb(nome, email, telefone, sexo, data_nascimento, profissao, estado_civil, endereco)
VALUES('Ana Maria', 'ana@maria.com', '81999999999','Feminino', '1990-02-02','Desenvolvedora', 'Solteiro(a)', 'Rua A, 123, Centro, Recife');
