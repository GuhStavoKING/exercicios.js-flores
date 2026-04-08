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
Descritivo: Dada uma string, transforme-a em um array de caracteres
*******************************************************************************/
function stringToArray(str) {
    return str.split('');
}
const prompt = require("prompt-sync")();
const string = prompt("Digite uma string: ");
const charArray = stringToArray(string);
console.log("Array de caracteres:", charArray);