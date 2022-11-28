class Pessoa
{
    // Atributos = variaveis ou caracteristicas
    // _nome   se torna privado
    _nome       // tipo string
    idade      // tipo integer
    peso       // tipo float ou real
    altura
    _imc

    // Metodos = funções ou comportamentos
    constructor(nome, idade, peso, altura){
        this._nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this._imc = this.peso / (this.altura * this.altura)
    }

}

let pessoa1 = new Pessoa("Yan", 2, 8, 2)


console.log(pessoa1)
