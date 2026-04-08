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
Descritivo: Verifique se um ano é bissexto (divisível por 4, mas não por 100, exceto se for divisível por 400)
*******************************************************************************/

// Importa a biblioteca
const prompt = require('prompt-sync')();

// Solicita o dado ao usuário
let ano = prompt("Digite o ano que deseja verificar: ");

// Converte para número (importante, pois o prompt sempre retorna string)
ano = parseInt(ano);

// Lógica do Ano Bissexto
const isBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

if (isBissexto) {
    console.log(`O ano ${ano} é bissexto! ✅`);
} else {
    console.log(`O ano ${ano} não é bissexto. ❌`);
}