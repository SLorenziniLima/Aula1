//operadores logicos
//OU (||)
//E (&&)
//Náo (!)

//hoje ta chovendo = false
//hoje e ter;a = true

//se hoje ta chovendo e hoje e ter;a
//emtao eu vou ficar em casa

//ou(||)
//true || true = true
//true || false = true
//false || false = false

//E(&&)
//true && true = true
//true && false = false
//false && false = false 


//quero validar se o numero digitado pelo usuario
//esta no intervalo entre 10 a 20 


//console.log (" ex 3")

//let prompt = require(`prompt-sync`) ()

//let numero = parseInt( prompt ("Digite um numero"));

//if(numero >=10 && numero <=20) {
//    console.log (" O numero informado esta no intervalo desejado")
//} else { 
//   console.log ( " O numero esta fora do intervalo ")
//}

let prompt = require(`prompt-sync`) ()

let animal = prompt("Digite o nome do animal para saber o que ele tem a dizer: ")

switch(animal) {
    case "cachorro" :
        console.log( " auuuuuuuuuuu")
        break;

    case "gato" :
        console.log("miauuuuuuuuuuuuu")
        break;

    case "vaca":
        console.log(" muuuuuuuuuuuuuu")
        break;

    case "papagaio":
        console.log("Voce fi a culpa desse amor acabar")
        break;

    default:
        console.log (" Conheço nao")
        break;

}









