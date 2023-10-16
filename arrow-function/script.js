var resultado = 0;
var potencia = 0;

function calc (numero1, numero2, operacao) {
    
    if (operacao === "+") {
        resultado = numero1 + numero2;
    } else if (operacao == "-") {
        resultado = numero1 - numero2;
    } else if (operacao == "*") {
        resultado = numero1 * numero2;
    } else if (operacao == "/") {
        resultado = numero1 / numero2;
    }

    return resultado;
}

function quadrado () {
    potencia = resultado ** 2;
    return potencia;
}


calc(12,13,"*");
console.log(resultado);
quadrado();
console.log(potencia);
const multiploDez = () => Math.ceil(potencia / 10) * 10;
console.log(multiploDez());



