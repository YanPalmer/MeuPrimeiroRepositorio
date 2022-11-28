//Para construir uma arvore binária primeiro preciso da cadeia de valores.
const cadeia = [9,8,4,1,5,0,9]
/*
Qual seria a lógica:
Deve-se criar uma árvore que começe de cima para baixo.
Como exemplo:
            9
        8
    4
*/
//1.Criar a Classe da Árvore binária
class Arvore {
    constructor(value, esquerda=null, direita=null) {
        this.value = value
        this.esquerda = esquerda;
        this.direita = direita;
    }
}

//2.
//3.

/*
class Pessoa
{
    // Atributos = variaveis ou caracteristicas
    // _nome   se torna privado
    _nome       // tipo string
    _idade      // tipo integer
    _peso       // tipo float ou real
    _altura
    _imc
    _sexo
    _email
    _telefone

    // Metodos = funções ou comportamentos
    constructor(nome, idade, peso, altura, sexo, email, telefone){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
        this._sexo = sexo
        this._email = email
        this._telefone = telefone
    }

}

let pessoa1 = new Pessoa("Yan", 2, 8, 2, "Masculino", "testeEmail@gmail.com", "00 12345-6789")


console.log(pessoa1)
*/