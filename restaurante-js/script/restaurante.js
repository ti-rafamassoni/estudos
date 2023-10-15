document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("button").addEventListener("click", atualizaExibicao);

    function atualizaExibicao() {
        document.getElementById("p1").innerHTML = valor();
        }


    function valor() {
        var preco = document.getElementById("preco").value;
        var peso = document.getElementById("peso").value;
        var valor = (peso / 1000) * preco;
        return "Valor a pagar R$: " + valor.toFixed(2);
       }
})