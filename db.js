const usuarios = [{
    id: 1,
    nome: "João da Silva",
    email: "joao@silva.com",
    telefone: "8199999999",
    sexo: "masculino",
    data_nascimento: "1990-01-01",
    profissao: "desenvolvedor",
    estado_civil: "solteiro",
    endereco: {
        rua: "Rua A",
        numero: 123,
        bairro: "Centro",
        cidade: "Recife",
        estado: "PE",
        cep: "50000-000"
    }
}];

function selecionarUsuarios(){
    return usuarios;
}
function selecionarUsuarioId(id){
    return usuarios.find(usuario => usuario.id === id);
}
function inserirUsuario(user){
    usuarios.push(user);
    return user;
}
function atualizarUsuario( id, user){
    const usuario = usuarios.find(usuario => usuario.id === id);
    if(!usuario) return;
    usuario.nome = user.nome;
    usuario.email = user.email;
    usuario.telefone = user.telefone;
    usuario.sexo = user.sexo;
    usuario.data_nascimento = user.data_nascimento;
    usuario.profissao = user.profissao;
    usuario.estado_civil = user.estado_civil;
    usuario.endereco.rua = user.endereco.rua;
    usuario.endereco.numero = user.endereco.numero;
    usuario.endereco.bairro = user.endereco.bairro;
    usuario.endereco.cidade = user.endereco.cidade;
    usuario.endereco.estado = user.endereco.estado;
    usuario.endereco.cep = user.endereco.cep;
}

module.exports = {
    selecionarUsuarios,
    selecionarUsuarioId,
    inserirUsuario,
    atualizarUsuario
}