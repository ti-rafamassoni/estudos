document.getElementById('buttonAdd').addEventListener('click', adicionarUsuario);

function adicionarUsuario(event) {
  event.preventDefault(); 

  const nome = document.getElementById('inputNome').value;
  const idade = document.getElementById('inputIdade').value;

  const tabela = document.getElementById('cadastros');
  const novaLinha = tabela.insertRow();

  const celulaNome = novaLinha.insertCell(0);
  celulaNome.innerHTML = nome;

  const celulaIdade = novaLinha.insertCell(1);
  celulaIdade.innerHTML = idade;

  document.getElementById('inputNome').value = '';
  document.getElementById('inputIdade').value = '';
}