document.addEventListener("DOMContentLoaded", function() {

document.getElementById("botao").addEventListener("click", atualizaExibicao);

function atualizaExibicao () {
    document.getElementById("titulo-final").innerHTML = document.getElementById("titulo").value ;
    document.getElementById("resultado").innerHTML = converter();
}

function converter() {
    let duracaoHoras = Math.floor(document.getElementById("duracao").value / 60);
    let duracaoMinutos = document.getElementById("duracao").value % 60;
    return duracaoHoras + "h: " + duracaoMinutos + "m";
}

})