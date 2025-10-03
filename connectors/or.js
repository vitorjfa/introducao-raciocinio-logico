// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.

// Eu posso votar caso eu seja Homem ou Mulher
// ou tenha 16 anos ou mais
// ou possua título de eleitor
//---------------------------------------//
//------- CONTEXTO DE ATRIBUIÇÃO --------//
//---------------------------------------//
let sexo = "H"; // ou "M"
let idade = 17
let possuotitulo = true

//---------------------------------------//
//------- CONTEXTO DE VALIDAÇÃO ---------//
//---------------------------------------//

if((sexo == "H" || sexo == "M") && idade >= 16 && possuotitulo == true){
    console.log("Você pode votar")
} else {
    console.log("Você não pode votar")
}
