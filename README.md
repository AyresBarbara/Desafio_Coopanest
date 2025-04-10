# Projeto Coopanest

Este projeto é uma aplicação web desenvolvida com **Angular** no frontend e **Node.js** com **Express** no backend. A aplicação permite **cadastrar, listar e editar dados de usuários** com persistência em banco de dados relacional (**MySQL**).

## 📌 Funcionalidades

- Cadastro de usuários
- Listagem de usuários em tabela
- Edição de dados diretamente na tabela
- Atualização automática no banco de dados

## ⚙️ Backend

O backend da aplicação é construído com **Node.js** e **Express**, utilizando o **MySQL** como banco de dados. As principais rotas HTTP implementadas são:

- `POST /dados`: Cria um novo usuário no banco de dados.
- `GET /dados`: Lista todos os usuários cadastrados.
- `PUT /dados/:id`: Atualiza os dados de um usuário existente com base no ID.

A conexão com o banco de dados é feita utilizando a biblioteca `mysql2/promise`, e as operações são realizadas com **queries parametrizadas** para segurança e performance.

## 📁 Estrutura do Banco

A tabela utilizada no banco se chama `usuario_tb` e contém campos como:

- `id_usuario`
- `nome`
- `email`
- `telefone`
- `sexo`
- `data_nascimento`
- `profissao`
- `estado_civil`
- `endereco`
- `data_atualizacao` (com atualização automática via `DEFAULT CURRENT_TIMESTAMP` em cada edição)

## 💻 Frontend

O frontend foi desenvolvido com **Angular** utilizando componentes Standalone (`standalone: true`). As duas principais telas da aplicação são:

### 📄 Formulário

- Responsável por capturar os dados do usuário e enviá-los para o backend.
- Após o envio, o usuário é redirecionado automaticamente para a tela de tabela.

### 📊 Tabela

- Exibe os dados cadastrados de forma tabular.
- Permite que os campos sejam editados diretamente na tabela.
- Após editar, ao clicar em "Salvar", os dados são enviados ao backend e a tabela é atualizada automaticamente.

## 🔁 Integração

- O Angular utiliza o `HttpClient` para se comunicar com o backend.
- O serviço `UsuarioService` centraliza as chamadas HTTP para as rotas da API.
- As respostas do backend são consumidas pelo frontend e refletidas na interface do usuário.
