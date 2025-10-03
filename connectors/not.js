// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// Eu posso digirir caso 
// Maior de idade
// Possuir CNH
// Ser brasileiro

//  Operador Condicional Ternário - JavaScript | MDN - Mozilla
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator
let possuiInformacoes = possuoCNH ? "Possui CNH" : "Não possui CNH";
possuiInformacoes += nacionalidade === "Brasileira" ? " e é brasileiro." : " e não é brasileiro.";

//---------------------------------------//
//------- CONTEXTO DE ATRIBUIÇÃO --------//
//---------------------------------------//

let idade = 18
let possuoCNH =  true
let nacionalidade = "Brasileira"

//---------------------------------------//
//------- CONTEXTO DE VALIDAÇÃO --------//
//---------------------------------------//

if(!(idade >= 18 && possuoCNH == true && nacionalidade === "Brasileira")){
    console.log("Posso dirigir")
} else{
    console.log("Eu não posso dirigir")
}