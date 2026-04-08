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
Descritivo:  Use um `while` para contar regressivamente de 10 até 0.
*******************************************************************************/

// 1. Iniciamos a variável com o valor de partida
let contador = 10;

console.log("Iniciando contagem regressiva...");

// 2. A condição: "Enquanto o contador for maior ou igual a zero"
while (contador >= 0) {
    console.log(contador); // Exibe o número atual
    
    // 3. Decremento: Diminuímos 1 do valor a cada volta
    // Isso é fundamental para não travar o navegador em um loop infinito
    contador--; 
}

console.log("Feliz Ano Novo!");