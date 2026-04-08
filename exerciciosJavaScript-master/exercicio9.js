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
Descritivo:  Crie um programa que aplique um desconto de 10% se a compra for acima de R$ 100,00.
*******************************************************************************/
let valorCompra = 200.00; 
let valorFinal;

if (valorCompra > 100) {
   
    let desconto = valorCompra * 0.10; 
    valorFinal = valorCompra - desconto;
    console.log("Parabéns! Você ganhou 10% de desconto.");
} else {
    
    valorFinal = valorCompra;
    console.log("Sua compra não atingiu o valor mínimo para o desconto.");
}

// Exibe o resultado final formatado
console.log("Valor da compra: R$ " + valorCompra.toFixed(2));
console.log("Total a pagar: R$ " + valorFinal.toFixed(2));