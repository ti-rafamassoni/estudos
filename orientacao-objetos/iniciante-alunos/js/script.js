class Aluno {
    constructor() {
        this.id = 1;
        this.arrayAlunos = [];
    }

    salvar () {
        let aluno = this.lerDados();
        if(this.validaCampos(aluno)) {
            this.adicionarArray(aluno);
        }

        this.listaTabela();
    }

    listaTabela() {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";
        for(let i = 0; i < this.arrayAlunos.length; i++) {
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_nota1 = tr.insertCell();
        let td_nota2 = tr.insertCell();
        let td_media = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.innerText = this.arrayAlunos[i].id;
        td_nome.innerText = this.arrayAlunos[i].nome;
        td_nota1.innerText = this.arrayAlunos[i].nota1;
        td_nota2.innerText = this.arrayAlunos[i].nota2;
        td_media.innerText = this.arrayAlunos[i].media;
       
        td_id.classList.add("center");
        td_acoes.classList.add("center");
        }
    }

    lerDados () {
        let aluno = {};
        aluno.id = this.id;
        aluno.nome = document.getElementById("inputNome").value;
        aluno.nota1 = parseFloat(document.getElementById("inputNota1").value);
        aluno.nota2 = parseFloat(document.getElementById("inputNota2").value);
        aluno.media = (aluno.nota1 + aluno.nota2)/2; 
        return aluno;
    }

    adicionarArray(aluno) {
        this.arrayAlunos.push(aluno);
        this.id++;

    }

    validaCampos (aluno) {
        let msg = "";
        
        if(aluno.nome == "") {
            msg += "Informe o nome do aluno \n"
        }

        if(aluno.nota1 == "") {
            msg += "Informe a primeira nota do aluno \n"
        }

        if(aluno.nota2 == "") {
            msg += "Informe a segunda nota do aluno"
        }

        if (msg !== "") {
            alert(msg);
            return false;
        }

        return true;

    }

 }

var aluno = new Aluno();