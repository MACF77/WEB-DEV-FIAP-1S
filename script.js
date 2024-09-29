//  como declarar variaveis:

let indefinida;
console.log(indefinida);

let vazia = "";
console.log(vazia);

let comValor = 42; 
console.log(comValor); 

// string para Float:

let numeroComoString = "12.34";
console.log("tipo antes da conversao", typeof numeroComoString);

let numeroComoFloat = parseFloat(numeroComoString);
console.log("tipo após a conversao", typeof numeroComoFloat); 

// int para float

numeroComoInt = 42;
console.log("tipo antes da conversao: int", typeof numeroComoInt);

numeroComoFloat = parseFloat(numeroComoInt);
console.log("tipo após a conversao: float", typeof numeroComoFloat);

console.log("valor como inteiro:", numeroComoInt);
console.log("valor como float:", numeroComoFloat);

// float para intt

numeroComoFloat = 42.78;
console.log("Tipo antes da conversão: float", typeof numeroComoFloat); 

numeroComoInt = parseInt(numeroComoFloat);
console.log("Tipo após a conversão: int", typeof numeroComoInt); 

console.log("Valor como float:", numeroComoFloat);
console.log("Valor como int:", numeroComoInt);

// Crie um programa que declare o nome, idade, email e telefone de um usuário e imprima na tela. 

let nome = "Marco Antonio";
console.log("Nome:", nome);

let idade = 24;
console.log("Idade:", idade);

let email = "RM559256@fiap.com.br";
console.log("Email:", email);

let telefone = "(77) 9 9839-6353";
console.log("Telefone:", telefone);

//

