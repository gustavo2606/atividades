// Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição.
// Inverter uma String: implemente um programa que inverte uma String fornecida pelo usuário utilizando um laço de repetição.
// Números perfeitos até 1000: imprima todos os números perfeitos de 1 a 1000 utilizando um laço de repetição.

var antesesor = 0 
var anterior = 1
var atual = 0

for (var i = 0; i < 10; i++) {
    atual = anterior + antesesor

    console.log(antesesor)
    
    antesesor = anterior
    anterior = atual

    
}