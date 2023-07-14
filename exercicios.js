let prompt = require(`prompt-sync`) ()

let nome = prompt ("Digite o seu nome: ")

let cargo = prompt ("Digite o seu cargo: ")

let salario = prompt ("Digite o seu salário: ")

if (salario <1000) {

    console.log ("Acrescente 10% no total")

    console.log (salario*1.1)

    } else {

    console.log (" Não haverá acrescimo no seu salario")
}