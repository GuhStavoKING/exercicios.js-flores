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
Descritivo: Receba um número de 1 a 7 e exiba o dia da semana correspondente (use `switch`).
*******************************************************************************/

const prompt = require('prompt-sync')();

// 1. Entrada de dados
const input = prompt("Digite um número de 1 a 7: ");
const dia = parseInt(input);

// 2. Estrutura de decisão
switch (dia) {
    case 1:
        console.log("1 = Domingo");
        break;
    case 2:
        console.log("2 = Segunda-feira");
        break;
    case 3:
        console.log("3 = Terça-feira");
        break;
    case 4:
        console.log("4 = Quarta-feira");
        break;
    case 5:
        console.log("5 = Quinta-feira");
        break;
    case 6:
        console.log("6 = Sexta-feira");
        break;
    case 7:
        console.log("7 = Sábado");
        break;
    default:
        // Caso o usuário digite algo fora de 1-7
        console.log("Opção inválida! Digite um número entre 1 e 7.");
        break;
}