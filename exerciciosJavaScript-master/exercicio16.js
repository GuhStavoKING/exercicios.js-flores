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
Descritivo: Crie um loop que pare (`break`) quando encontrar o número 7 em uma contagem de 1 a 10.
*******************************************************************************/

console.log("Iniciando a contagem...");

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Número 7 encontrado! Parando o loop...");
        break; // Interrompe o loop imediatamente
    }
    console.log("Número: " + i);
}

console.log("Loop finalizado.");