/*
Nome: Pedro Henrique de Oliveira Alves

1 – Calcule a soma de todos os números de 0 ao 50, essa
soma deve fazer uso do laço de repetição for.


console.clear()
let z = 0;
let y = 0;
for (let x = 0; x <= 49; x++){
    z++
    y = y+z;
    console.log(y);
}
*/
var soma = 0;
for (var cont = 0; cont <= 50; cont++) {
    soma += cont; //soma = soma + cont
}
console.log("A soma de todos os n\u00FAmeros de 0 ao 50 \u00E9 igual:");
console.log(soma);
