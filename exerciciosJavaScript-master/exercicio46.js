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
Descritivo: Crie uma Higher-Order Function que receba uma função e retorne outra função que execute a primeira 
duas vezes.
*******************************************************************************/

const prompt = require('prompt-sync')();

// 1. A Higher-Order Function (A "Fábrica")
// Ela recebe 'fn' (uma função) como parâmetro
function repetirDuasVezes(fn) {
    // Ela retorna uma NOVA função
    return function() {
        fn(); // Executa a primeira vez
        fn(); // Executa a segunda vez
    };
}

// 2. Uma função simples para testar
const dizerOla = () => {
    console.log("Olá, mundo! 👋");
};

// 3. Criando a função turbinada
const dizerOlaDuasVezes = repetirDuasVezes(dizerOla);

// 4. Executando
console.log("--- Executando a função retornada ---");
dizerOlaDuasVezes();