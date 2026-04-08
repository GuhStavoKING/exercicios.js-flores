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
Descritivo: Crie um programa que verifique se um número é par ou ímpar.
*******************************************************************************/
const prompt = require("prompt-sync")(); // Importa a biblioteca prompt-sync para ler a entrada do usuário
let numero = parseInt(prompt("Digite um número:")); // Lê o número digitado pelo usuário e converte para inteiro

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}
