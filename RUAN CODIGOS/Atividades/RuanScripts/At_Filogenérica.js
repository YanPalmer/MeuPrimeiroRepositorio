// Invocação com função e invocação com construtor

function Pessoa(nome, sobreNome) {
    // o que acontece quando se chama uma função como
    // construtor utilizando o operador new

    // var obj = {}; o new criar automaticamente um objeto escondido

    // this = obj;
    // obj.__proto__ = Pessoa

    /*
    this.nome = nome;
    this.sobreNome = sobreNome;

    this.nomeCompleto = function() {
        return this.nome + '' + this.sobreNome;
    };
    */

    // return obj;

    // o que acontece quando se chama uma função como função

    // this = window;
    // this = global;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + "" + this.sobreNome
}

console.dir(Pessoa);

 var joao = new Pessoa("joao ", "da Silva");
 // Informa ao JavaScript que é uma função construtora
 var maria = new Pessoa("Maria ", "Dos Santos"); //Função construtora

console.log(Pessoa.prototype === joao.__proto__);

console.log(joao);
console.log(joao.nomeCompleto())
console.log(maria);
console.log(maria.nomeCompleto());







// let clientes = []
// var nome = prompt("Qual o seu nome?")
// var idade = prompt("Qual a sua idade?")
// var sexo = prompt("Qual o seu sexo?")

// for (let i=0; i<clientes.length; i++) {
//     clientes[i].nome
//     console.log(nome)
// }
