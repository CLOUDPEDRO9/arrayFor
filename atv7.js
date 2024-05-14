/*
Nome: Pedro Henrique de oliveira Alves

7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
*/
console.clear;
var teclado = require("prompt-sync")();
var fatorial = (teclado("Digite um n\u00FAmero para fatorar: "));
var y = 1;
for (var x = 1; x <= fatorial; x++) {
    y = x * y;
}
console.log("O fatorial de ".concat(fatorial, " \u00E9 igual: ").concat(y));
