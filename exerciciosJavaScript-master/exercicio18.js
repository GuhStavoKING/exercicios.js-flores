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
Descritivo: Gere os primeiros 10 números da sequência de Fibonacci.
*******************************************************************************/
// Definimos a quantidade de números que desejamos
const n = 10;
let fibonacci = [0, 1]; // Iniciamos com os dois primeiros valores fixos

// Começamos o loop a partir do índice 2, pois o 0 e o 1 já existem
for (let i = 2; i < n; i++) {
    // O próximo número é a soma dos dois anteriores no array
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Os primeiros 10 números da sequência de Fibonacci são:");
console.log(fibonacci.join(", "));