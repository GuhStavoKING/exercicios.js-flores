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
Descritivo:   Calcule o IMC (Peso / Altura²) e classifique (Abaixo do peso, Normal, Sobrepeso, Obesidade).
*******************************************************************************/
// Definição das variáveis de entrada
const peso = 70; // Peso em kg
const altura = 1.75; // Altura em metros

// Cálculo do IMC: Peso dividido pela altura ao quadrado
const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

// Estrutura de Decisão para Classificação
if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Classificação: Peso Normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Classificação: Sobrepeso");
} else {
    console.log("Classificação: Obesidade");
}