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
Descritivo:Calcule a soma de todos os números de 1 a 100 usando um loop.
*******************************************************************************/

let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log("A soma de 1 a 100 é:", soma);
