/*
Function expression: É criada a partir da declaração de uma váriável, na qual assinalamos
uma função. Está função pode ser anônima ou nomeada. A mesma poderá ser ativada atravès da variável assinada.
*/

const somar = function (a, b) {
  return a + b;
};

somar(4, 2); //6

const quadrado = (a) => a * a;

/*
IIFE - Immediately INvoked Function Expression

Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para 
isolarmos o escopo de um código JavaScript era através das chamadas IIFE's
*/

var instrumento = "Violão";
(function () {
  //código isolado do escopo global
  var instrumento = "Guitarra";
  console.log(instrumento);
})();

console.log(instrumento);
