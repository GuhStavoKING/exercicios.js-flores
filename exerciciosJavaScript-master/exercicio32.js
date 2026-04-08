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
Descritivo:  Dado um array de nomes, transforme-o em uma string separada por vírgulas
*******************************************************************************/
const nomes = ["Juliano", "Pedro", "Lucas", "Fernando", "Sara"];
const nomesString = nomes.join(", "); // A função join() é usada para concatenar os elementos do array em uma string,
//  separando-os por vírgulas e um espaço.
console.log(nomesString);
