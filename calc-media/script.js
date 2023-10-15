var numero1 = parseFloat(prompt("Digite o primeiro número"));
var numero2 = parseFloat(prompt("Digite o segundo número"));
var operacao = prompt("Escolha a operação: +, -, * ou /");

var resultado = 0;

if (operacao == "+") {
    resultado = numero1 + numero2;
} else if (operacao == "-") {
    resultado = numero1 - numero2;
} else if (operacao == "*") {
    resultado = numero1 * numero2;
} else if (operacao == "/") {
    resultado = numero1 / numero2;
}

console.log(resultado);