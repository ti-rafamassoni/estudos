let entrada;
let parcelas;

function parcelamento () {
    entrada = document.getElementById("preco").value / 2;
    parcelas = entrada / 12;
    return "Entrada de R$: " + entrada.toFixed(2) + " + 12x de R$: " + parcelas.toFixed(2);
}

function atualizaExibicao() {
    document.getElementById("p1").innerHTML = "Promoção: " + document.getElementById("veiculo").value;
    document.getElementById("p2").innerHTML = parcelamento();
}

document.getElementById("botao").addEventListener ("click", atualizaExibicao);
