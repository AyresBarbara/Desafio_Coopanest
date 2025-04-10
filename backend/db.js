const mysql = require("mysql2/promise");

const usuarios = mysql.createPool(process.env.CONNECTION_STRING)

async function selecionarUsuarios(){
    const results = await usuarios.query("SELECT * FROM usuario_tb")
    return results[0];
}
async function selecionarUsuarioId(id){
    const [results] = await usuarios.query("SELECT * FROM usuario_tb WHERE id = ?", [id]);
    return results[0];
}
async function inserirUsuario(user){
    const values = [user.nome, user.email, user.telefone, user.sexo, user.data_nascimento, user.profissao, user.estado_civil, user.endereco]
    await usuarios.query("INSERT INTO usuario_tb(nome, email, telefone, sexo, data_nascimento, profissao, estado_civil, endereco)VALUES(?, ?, ?, ?, ?, ? ,? ,? )", values);
}
async function atualizarUsuario( id, user){
    const dataFormatada = new Date(user.data_nascimento).toISOString().split('T')[0];
    const values = [ user.nome, user.email, user.telefone, user.sexo, dataFormatada, user.profissao,user.estado_civil, user.endereco, id];
    
    await usuarios.query(
       "UPDATE usuario_tb SET nome=?, email=?, telefone=?, sexo=?, data_nascimento=?, profissao=?, estado_civil=?, endereco=? WHERE id_usuario=?",
        values
     );

    
}

module.exports = {
    selecionarUsuarios,
    selecionarUsuarioId,
    inserirUsuario,
    atualizarUsuario
}