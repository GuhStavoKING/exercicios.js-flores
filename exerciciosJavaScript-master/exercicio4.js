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
Descritivo: Crie um sistema simples de login: se o usuário for "admin" e a senha "1234", mostre "Acesso Permitido", 
caso contrário, "Acesso Negado".
*******************************************************************************/

function login(usuario, senha) {
  if (usuario === "admin" && senha === "1234") {
    return "Acesso Permitido";
  } else {
    return "Acesso Negado";
  }
}

console.log(login("admin", "1234"));  
console.log(login("admin", "0000"));  
console.log(login("user", "1234"));
