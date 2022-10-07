  class carro
  { //declarar variavel dentro da casse n precisa usar let, var, const...
    constructor(parametro1, parametro2, parametro3)
    { 
      //console.log(parametro1, parametro2, parametro3);
      //coloquei na ordem dos parãmetros
      this.color=parametro1
      this.modelo=parametro2
      this.ano=parametro3
      this.estado=false
    }

    info()
    {
      console.log("ano " + this.ano)
      console.log("cor " + this.color)
      console.log("modelo " + this.modelo)
      console.log("estado " + this.estado ? "bi bi bit" : "nao")
    }
    ligar()
    {
      //muda o estado de false para true se esse metodo for chamado
      this.estado=true
    }
    desligar()
    {
      //muda o estado de true para false se esse metodo for chamado
      this.estado=false
    }
    tipo(){
      console.log(typeof this.estado)
    }
  }
  //let nome = new nome-da-class("parametro"), LET nome do objeto à gerar = NEW nome da CLASS onde o objeto pertence("parametro que define a variavel THIS.XXXX")
  //esse parametro define a variavel "color" da linha "this.color"
  let c1 = new carro('vermelhogg', '2003', 's');
  let c2 = new carro('rosa', '2000', 'l');
  let c3 = new carro('verde', '2021', 'xl');
  let c4 = new carro('violeta', '2019', 'plus');
  let c5 = new carro('prata', '2015', 'max');

  //NomeDoCarro.color(cor)
  //chama o metodo infor do objeto, nesse caso vai printar texto + parametro

let carroDeYan = new carro('rosa', 2022, 'tesla gay')
//carroDeYan.ligar()
//pera. um min de silêncio, vou ver o codigo todo dnv antes que eu endoide
//okok
carroDeYan.info() //Informações
console.log("------------")
console.log(carroDeYan.ligar())
console.log("------------")
console.log(carroDeYan.desligar())
console.log("------------")
console.log(typeof this.estado)//testa nao vai pq tem varias instancias, carro de yan é uma instancia do objeto carro
carroDeYan.tipo() // nome da instancia do objeto "." nome do metodo q criei e "( )"

console.log(carroDeYan)


//é um objjeto
//esse metodo eu criei la na classe, so precisa chamar
//console.log(this.estado)
//console.log(estado)
//console.log(carroDeYan.color, carroDeYan.modelo, carroDeYan.ano, carroDeYan.estado)


//hummm. deixa eu ver o código todo com calma. roda o programa quando eu terminar
// entendi, egg ver kkkk ovo ver

//entendi
// ta certo mas n ta funcionando
//a parte q se eu n ligar o carro era pra ele ta desligado