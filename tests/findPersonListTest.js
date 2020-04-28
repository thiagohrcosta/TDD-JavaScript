const should = require("should");
const findPerson = require("../findPerson");

describe("find person", () => {
    it("soma pessoas", () =>{
        findPerson.somaPessoas(2, 3).should.be.equal(5);
    })
    it("deve somar dois números e retornar 30", () => {
        findPerson.somaPessoas(10, 20).should.be.equal(30);
    })
})

