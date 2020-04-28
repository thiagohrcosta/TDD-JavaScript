const should = require("should");
const findPerson = require("../findPerson");

describe("find person", () => {
    it("soma pessoas", () =>{
        findPerson.somaPessoas(2, 3).should.be.equal(5);
    })
    it("deve somar dois números e retornar 30", () => {
        findPerson.somaPessoas(10, 20).should.be.equal(30);
    })
    it("Passar um nome que não esteja na lista, e retornar que não foi encontrado.", () => {
        findPerson.encontrarPessoa("João da Silva").should.be.equal("Pessoa não encontrada.")
    })
    it("retorna a mensagem de que o nome está vazio, seu preenchimento é obrigatório", () => {
        findPerson.encontrarPessoa().should.be.equal("Campo nome vazio, item obrigatório.")
    })
    it("Retornar mensagem de tipo inválido", () => {
        findPerson.encontrarPessoa(123).should.be.equal("Tipo inválido.")
    })
    it("Deve retornar um nome da lista", () => {
        findPerson.encontrarPessoa("Ana Maria").should.be.equal("Ana Maria")
    })
})

