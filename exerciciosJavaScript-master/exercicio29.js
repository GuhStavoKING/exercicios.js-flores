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
Descritivo:Implemente uma função recursiva para calcular o fatorial.
*******************************************************************************/
function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * calcularFatorial(n - 1);
}

const numero = 5;
const resultado = calcularFatorial(numero);

console.log(`O fatorial de ${numero} é: ${resultado}`);