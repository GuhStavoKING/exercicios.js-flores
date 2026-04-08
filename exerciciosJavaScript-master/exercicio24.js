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
Descritivo: Crie uma função que converta graus Celsius para Fahrenheit
*******************************************************************************/

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusParaFahrenheit(0)); 
console.log(celsiusParaFahrenheit(100)); 
console.log(celsiusParaFahrenheit(37));  
