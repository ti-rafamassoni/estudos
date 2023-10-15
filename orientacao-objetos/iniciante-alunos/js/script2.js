function Aluno(nome, nota) {
    this.nome: document.getElementById("inputNome").value;
    this.nota: document.getElementById("inputNota").value;
}

const aluno1 = new Aluno();

function exibirAluno (aluno1) {
  alert(aluno1);  
}