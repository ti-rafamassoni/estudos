const dividir = (a, b) => {
   
   try {
    return a / b;
   } catch (error) {
    if(error instanceof DivisionByZeroError) {
        console.log("Erro: divisão por zero");
    } else {
        throw error;
    }
   }
}

const a = parseFloat(prompt("Digite o dividendo:"));
const b = parseFloat(prompt("Digite o divisor:"));

console.log(dividir(a, b));