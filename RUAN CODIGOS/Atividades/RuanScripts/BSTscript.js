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