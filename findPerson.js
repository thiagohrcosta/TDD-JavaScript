const listaDePessoas = [
    "José",
    "Maria",
    "Ana Maria"
]


const somaPessoas = (n1, n2) => n1 + n2;

const encontrarPessoa = nome => {
    try{
        validacao(nome)
        const pessoaEncontrada = listaDePessoas.find(pessoa => pessoa == nome)
        return pessoaEncontrada ? pessoaEncontrada : "Pessoa não encontrada."
    }
    catch(erro){
        return erro
    }
}

const validacao = nome => {
    if(!nome) throw "Campo nome vazio, item obrigatório."
    if(typeof nome != "string") throw "Tipo inválido."
}

module.exports = {
    somaPessoas,
    encontrarPessoa
}