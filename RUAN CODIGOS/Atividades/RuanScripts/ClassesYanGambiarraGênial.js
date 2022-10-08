// const v1 = prompt("Digite o 1º valor: ");
// const v2 = prompt("Digite o 2º valor: ");
// const v3 = prompt("Digite o 3º valor: ");
// const v4 = prompt("Digite o 4º valor: ");
// const v5 = prompt("Digite o 5º valor: ");
// const v6 = prompt("Digite o 6º valor: ");
// const v7 = prompt("Digite o 7º valor: ");
// const v8 = prompt("Digite o 8º valor: ");
// const v9 = prompt("Digite o 9º valor: (OPICIONAL)");

//Cria uma lista ordenada com os valores solicitados
//...........0,1,2,3,4, 5, 6, 7, 8, 9
var lista = [1,2,5,6,10,13,14,15,16,20];
// for (let valor=1; valor <=9; valor++) {
//     numero = prompt("Digite o "+ valor +"º valor: ")
//     lista.push(numero)
// }
//Pega o meio da árvore
var topo = 0;
//Se tiver 9 caracteres, pega o 5º elemento da lista
if (lista.length%2 == 0) {
    topo = lista[4];
    console.log("A lista tem 9 caracteres")
}
//Se tiver 8 caracteres, pega o 4º elemento da lista
if (lista.length%2 == 1) {
    topo = lista[3];
    console.log("A lista tem 8 caracteres")
}
//lista.splice(4,1)
console.log(topo)
console.log(lista)


