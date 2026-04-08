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
Descritivo:. Crie uma Arrow Function com retorno implícito que eleve um número ao quadrado
*******************************************************************************/
const elevarAoQuadrado = numero => numero ** 2;
const prompt = require('prompt-sync')();// definir a função prompt para receber a entrada do usuário
const numero = parseFloat(prompt("Digite um número para elevar ao quadrado: ")); // solicitar ao usuário que digite um número
const resultado = elevarAoQuadrado(numero);
console.log(`O quadrado de ${numero} é: ${resultado}`);