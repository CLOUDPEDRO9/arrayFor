/*
Nome: Pedro Henrique de oliveira Alves

7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
*/

console.clear
const teclado = require(`prompt-sync`)();

let fatorial: number = (teclado(`Digite um número para fatorar: `));
let y = 1;

for(let x = 1; x <= fatorial; x++){
    y = x * y
}

console.log(`O fatorial de ${fatorial} é igual: ${y}`);