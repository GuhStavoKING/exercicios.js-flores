/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
             25013061-2 - Natan Ferreira dos Santos 
             25013061-2 - Gabriel Henry Pacheco Morm�llo 
             25361810-2 - Matheus Gabriel Scariot 
             25364386-2 - Gustavo Henrique Ferreira Dos Santos
Data: 10 de abril de 2026
Descritivo: Crie uma função `operacao(a, b, callback)` que execute o callback com a e b.
*******************************************************************************/

function operacao(a, b, callback) {
  return callback(a, b);
}

const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

console.log(operacao(10, 5, soma));
console.log(operacao(10, 5, subtracao));
console.log(operacao(10, 5, multiplicacao));
console.log(operacao(10, 5, divisao));
