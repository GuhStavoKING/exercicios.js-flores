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
Descritivo: Dado um array de números, use um loop para encontrar o maior valor
*******************************************************************************/
const numeros = [15, 42, 7, 89, 23, 91];


let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    
    if (numeros[i] > maior) {
        maior = numeros[i]; 
    }
}

console.log("O maior valor do array é:", maior);