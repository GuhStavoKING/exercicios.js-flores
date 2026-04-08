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
Descritivo:  Crie uma função `areaRetangulo(base, altura)` que retorne a área.
*******************************************************************************/
function areaRetangulo(base, altura) {
  return base * altura;
}
const prompt = require("prompt-sync")();
const base = parseFloat(prompt("Digite a base do retângulo: "));
const altura = parseFloat(prompt("Digite a altura do retângulo: "));
const area = areaRetangulo(base, altura);
console.log(`A área do retângulo é: ${area}`);
