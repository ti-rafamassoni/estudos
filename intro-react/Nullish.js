// Nullish Coalescing Operator

const idade = 0;

// 0, "", [], false, undefined, null = são valores considerados falsy(não válidos) em javascript. Portanto em uma opção como abaixo, na comparação do ||, ele não vai considerar o valor válido se for uma destas condições.

// document.body.innerText = "Sua idade é: " + (idade || "Não informada");

// Por isso usa-se atualmente o Nullish, que tem a mesma função do || mas é mais restritivo e considera, por exemplo, o número 0 como válido.

document.body.innerText = "Sua idade é: " + (idade ?? "Não informado");

