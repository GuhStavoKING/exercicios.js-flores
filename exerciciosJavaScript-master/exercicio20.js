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
Descritivo: Use um `do...while` para garantir que uma variável seja incrementada pelo menos uma vez antes da 
verificação.
*******************************************************************************/
let contador = 0;

do {
    contador++; 
    console.log("O contador agora é: " + contador);
} while (contador < 5);

console.log("Loop finalizado.");