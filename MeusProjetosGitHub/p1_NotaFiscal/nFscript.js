//document.getElementById("data"). innerHTML = Date()
/*
data = new Date()
ano = data.getFullYear()
mes = data.getMonth()
dia = data.getDate()
document.getElementById("data").innerHTML = dia +"/"+ mes +"/"+ ano
*/
// Informa a data:
date2 = new Date().toLocaleDateString()
document.getElementById("data").textContent = date2
// Informa o horário:
horario = new Date()
horas = horario.getHours()
minutos = horario.getMinutes()
segundos = horario.getSeconds()

if (horas < 10) {horas = "0" + horas;}
if (segundos < 10) {segundos = "0" + segundos;}


document.getElementById("data").textContent += " "+ horas +":"+ minutos +":"+ segundos
document.getElementById("data").textContent += " VENDA CAIXA N.1234" // Depois criar um programa que verifique o tipo de caixa que o vendedor está utilizando

function sum(x, y) {
    a = 4+2
    return a;
}
console.log(sum(a))
