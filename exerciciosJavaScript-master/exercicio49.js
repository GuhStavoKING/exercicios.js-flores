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
Descritivo: Crie uma função `criarMultiplicador(multiplicador)` que retorne uma função que multiplica qualquer número 
pelo multiplicador (Closure)
*******************************************************************************/
function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(duplicar(10)); 
console.log(triplicar(10)); 
console.log(duplicar(5)); 