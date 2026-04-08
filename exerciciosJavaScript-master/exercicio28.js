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
Descritivo:  Crie uma função que retorne um objeto com `nome` e `idade` da pessoa.
*******************************************************************************/
/**
 * Função: criarPessoa
 * Parâmetros: nome (String), idade (Number)
 * Retorno: Objeto contendo os dados recebidos
 */
function criarPessoa(nomeInformado, idadeInformada) {
    // Criamos o objeto e atribuímos os parâmetros às propriedades
    const pessoa = {
        nome: nomeInformado,
        idade: idadeInformada
    };

    return pessoa; // Retorna o objeto completo
}

// --- Execução no VS Code ---

// Chamamos a função e armazenamos o objeto retornado em uma constante
const usuario = criarPessoa("Sara", 25);

// Acessando as propriedades do objeto retornado
console.log("Objeto completo:", usuario);
console.log(`Olá, meu nome é ${usuario.nome} e tenho ${usuario.idade} anos.`);