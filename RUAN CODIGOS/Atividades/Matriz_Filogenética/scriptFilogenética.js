function cod() {
    NumColunas = document.getElementById("NumColunas").value
    NumLinhas = document.getElementById("NumLinhas").value
    console.log("Colunas:",NumColunas);
    console.log("Linhas:",NumLinhas);
    console.log("-------------");

    for (let C = 0; C < NumColunas; C++) {
        console.log(C);
        let coluna = document.querySelector("tr");
        let CriaLinha = document.createElement("th");
        CriaLinha.textContent = "Coluna"+C;

        coluna.appendChild(CriaLinha);
        console.log(coluna);
        console.log("-------------");
        for (let L = 0; L < NumLinhas; L++) {
            console.log(L);
            let corpo = document.querySelector("tbody");
            // let linha = document.createElement("tr");
            if (L==0) {
                var linha = document.createElement("tr");
            }
            let AdicionaLinha = document.createElement("td");
            AdicionaLinha.textContent = "Linha"+L;
            if (L==0) {
                corpo.appendChild(linha);
            }
            // corpo.appendChild(linha);
            

            linha.appendChild(AdicionaLinha);
            console.log(corpo);
            console.log("-------------");
            
        }
        //Tenho que pular a linha...
        console.log("-------------");
    }
    /*
    for (let C = 0; C < NumColunas.length; C++) {
        var item1 = document.createElement("input")
        item1 = document.createTextNode("Coluna1")
        console.log(item1)
        for (let L = 0; L < array.length; L++) {
            var linha1 = document.createElement("input")
            item2 = document.createTextNode("Linha1")
            console.log(item2)
            
        }
        
    }
    */
}

/*
let titulo = document.querySelector("section h1");
titulo.textContent = "Tabela de Frutas";

let tabela = document.getElementById("tabela2");
tabela.innerHTML = "oi"
*/




/*
var tabela = document.createElement("input") //Cria o input
var texto = document.createTextNode("oi") //Cria o texto
tabela.appendChild(texto) //Adiciona o texto na tabela
console.log(tabela)

var tr = document.createElement("tr")
var th = document.createElement("th")
th = document.createTextNode("Coluna1")
tr.appendChild(th)
console.log(tr)
*/