function capitalizar (vetor) {
    var modificado = [];
    for (let i = 0; i < vetor.length; i++) {
        var letraInicial = vetor[i].charAt(0).toUpperCase();
        var restoTexto = vetor[i].slice(1);
        var resultado = letraInicial + restoTexto;
        modificado [i]= resultado;   
}
    return modificado;
}

function ordenar (vetor) {
    return vetor.sort(function(a,b) {
    return a.localeCompare(b);
    })
} 

export default {
    capitalizar: capitalizar,
    ordenar: ordenar
}