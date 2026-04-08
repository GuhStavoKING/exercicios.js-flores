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
Descritivo:  Verifique se um caractere informado é uma vogal ou consoante.
*******************************************************************************/
let caractere = 'y';
let letra = caractere.toLowerCase();

switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`'${caractere}' é uma vogal.`);
        break;
    default:
       
        if (letra >= 'a' && letra <= 'z') {
            console.log(`'${caractere}' é uma consoante.`);
        } else {
            console.log("Não é uma letra válida.");
        }
}