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
Descritivo: Faça um script que receba a idade de uma pessoa e diga se ela pode votar (16 anos ou mais)
*******************************************************************************/
const prompt = require('prompt-sync')();
let idade = parseInt(prompt("Digite a idade da pessoa:"));

if (idade >= 16) {
    console.log("A pessoa pode votar.");
} else {
    console.log("A pessoa não pode votar.");
}