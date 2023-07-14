let prompt = require(`prompt-sync`) ()

let nome = prompt ("Digite o seu nome: ")

let salario = prompt ("Digite o seu salário: ")

if (salario <500) {

    console.log ("Acrescente 30% de aumento")

    console.log (salario*1.3)

    } else {

    console.log (" Você não tem direito ao aumento")
}