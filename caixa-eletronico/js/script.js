function calcularNotas() {
    // Criar Referências aos elementos da página
    let inSaque = document.querySelector('#inSaque');
    let outNotasCem = document.querySelector('#outNotasCem');
    let outNotasCinquenta = document.querySelector('#outNotasCinquenta');
    let outNotasDez = document.querySelector('#outNotasDez');

    // Limpa mensagens (caso, segunda execução)
    outNotasCem.textContent = "";
    outNotasCinquenta.textContent = "";
    outNotasDez.textContent = "";

    let saque = Number(inSaque.value); 

    // Se não preencheu ou Not-a-Number(NaN)
    if(saque == 0 | isNaN(saque)) {
        alert('Informe o valor do saque corretamente.') 
        inSaque.focus();                               
        return;
    }

    // Verifica se o saque não é múltiplo de 10
    if(saque % 10 != 0) {
        alert('Valor inválido para notas disponíveis (R$ 10, 50, 100).');
        inSaque.focus();
        return;
    }

    // Calcula as notas de 10, 50 e 100
    let notasCem = Math.floor(saque / 100);
    let resto = saque % 100;
    let notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    let notasDez = Math.floor(resto / 10);

    // Exibeas notas apenas se houver
    if (notasCem > 0) {
        outNotasCem.textContent = `Notas de R$ 100: ${notasCem}`;
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = `Notas de R$ 50: ${notasCinquenta}`;
    }
    if (notasDez > 0) {
        outNotasDez.textContent = `Notas de R$ 10: ${notasDez}`;
    }
}
// Cria referência ao elemento exibir que consta na página
let btExibir = document.querySelector('#btExibir');
btExibir.addEventListener("click", calcularNotas);