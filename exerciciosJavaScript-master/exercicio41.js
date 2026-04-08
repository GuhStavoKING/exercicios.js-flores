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
Descritivo:  Converta a função `function soma(a,b) { return a+b }` para Arrow Function.
*******************************************************************************/
const soma = (a, b) => a + b;
const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt('Digite o primeiro número: '));
const num2 = parseFloat(prompt('Digite o segundo número: '));
const resultado = soma(num1, num2);
console.log(`A soma de ${num1} e ${num2} é: ${resultado}`);