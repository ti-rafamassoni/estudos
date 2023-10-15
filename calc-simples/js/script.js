document.getElementById("somar").addEventListener('click', sum);
document.getElementById("sub").addEventListener('click', sub);
document.getElementById("multi").addEventListener('click', multi);
document.getElementById("dividir").addEventListener('click', dividir);

function sum ()  {

var numero1 = parseInt(document.getElementById("numero1").value);
var numero2 = parseInt(document.getElementById("numero2").value);

var resultado = numero1 + numero2;

document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function sub ()  {

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    
    var resultado = numero1 - numero2;
    
    document.getElementById("resultado").textContent = "Resultado: " + resultado;

}

function multi ()  {

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    
    var resultado = numero1 * numero2;
    
    document.getElementById("resultado").textContent = "Resultado: " + resultado;

}

function dividir ()  {

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    
    var resultado = numero1 / numero2;
    
    document.getElementById("resultado").textContent = "Resultado: " + resultado;

}
