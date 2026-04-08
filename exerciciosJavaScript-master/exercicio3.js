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
Descritivo:  Escreva uma função que receba dois números e retorne o maior deles.
*******************************************************************************/

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maiorNumero(10, 5)); 
console.log(maiorNumero(3, 99));  
console.log(maiorNumero(7, 7));   
