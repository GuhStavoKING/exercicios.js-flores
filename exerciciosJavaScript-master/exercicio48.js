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
Descritivo:. Use `.reduce()` para transformar um array de objetos em um objeto somatório (ex: somar salários)
*******************************************************************************/
// Array de objetos representando funcionários
const funcionarios = [
    { nome: "Ana", salario: 2500 },
    { nome: "Bruno", salario: 3200 },
    { nome: "Carla", salario: 4100 },
    { nome: "Diego", salario: 2800 }
];

/**
 * .reduce(callback, valorInicial)
 * - acumulador: guarda a soma parcial a cada volta
 * - funcionario: representa o objeto atual do array
 * - 0: é o valor inicial do acumulador
 */
const totalSalarios = funcionarios.reduce((acumulador, funcionario) => {
    return acumulador + funcionario.salario;
}, 0);

// Exibindo os resultados no console do VS Code
console.log("Folha de Pagamento:");
funcionarios.forEach(f => console.log(`- ${f.nome}: R$ ${f.salario}`));

console.log("---------------------------");
console.log(`Total a pagar: R$ ${totalSalarios}`);