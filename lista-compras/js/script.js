class ListaCompras {
    constructor () {
        this.id = 1;
        this.arrayProdutos = [];
    }
    
    adicionar() {
        let item = this.lerDados();
        this.adicionarArray(item);
        this.listaTabela();
        document.getElementById("inputProduto").value = "";
        document.getElementById("inputQtd").value = "";     
    }

    lerDados() {
        let item = {};
        item.id = this.id;
        item.produto = document.getElementById("inputProduto").value;
        item.qtd = document.getElementById("inputQtd").value;
        return item;
    } 

    adicionarArray(item) {
        this.arrayProdutos.push(item);
        this.id++;
    }

    listaTabela() {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";
        for(let i = 0; i < this.arrayProdutos.length; i++) {
        let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_qtd = tr.insertCell();
        let td_acoes = tr.insertCell();
        td_id.innerText = this.arrayProdutos[i].id;
        td_produto.innerText = this.arrayProdutos[i].produto;
        td_qtd.innerText = this.arrayProdutos[i].qtd;
        let editIcon = document.createElement("i");
        editIcon.className = "fas fa-pencil-alt"; // Classe para o ícone de lápis do Font Awesome
        let editButton = document.createElement("button");
        editButton.className = "btn btn-warning";
        editButton.appendChild(editIcon);
        editButton.addEventListener('click', () => {
            this.editarItem(this.arrayProdutos[i]);
        });
        td_acoes.appendChild(editButton);

        // Adicione um botão com um ícone de lixeira (remoção)
        let deleteIcon = document.createElement("i");
        deleteIcon.className = "fas fa-trash"; // Classe para o ícone de lixeira do Font Awesome
        let deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger ml-2";
        deleteButton.appendChild(deleteIcon);
        deleteButton.addEventListener('click', () => {
            this.removerItem(i);
        });
        td_acoes.appendChild(deleteButton);
        }
    }
    
    removerItem(index) {
        this.arrayProdutos.splice(index, 1);
        this.listaTabela(); // Atualize a tabela após remover o item
    }

    editarItem(item) {
        // Preencha os campos de entrada com os detalhes do item para edição
        document.getElementById("inputProduto").value = item.produto;
        document.getElementById("inputQtd").value = item.qtd;
    }
}

const listaCompras = new ListaCompras();