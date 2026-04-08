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
Descritivo: Verifique se três lados informados podem formar um triângulo e, se sim, classifique-o (Equilátero, 
Isósceles, Escaleno).
*******************************************************************************/
// Definição dos lados
const ladoA = 10;
const ladoB = 10;
const ladoC = 10;

// 1. Verificação de Existência (Regra da Desigualdade Triangular)
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    
    console.log("Os lados informados formam um triângulo.");

    // 2. Classificação quanto aos lados
    if (ladoA === ladoB && ladoB === ladoC) {
        // Todos os lados iguais
        console.log("Classificação: Equilátero");
    } 
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        // Pelo menos dois lados iguais
        console.log("Classificação: Isósceles");
    } 
    else {
        // Todos os lados diferentes
        console.log("Classificação: Escaleno");
    }

} else {
    // Caso a soma de dois lados não seja maior que o terceiro
    console.log("Os lados informados NÃO podem formar um triângulo.");
}