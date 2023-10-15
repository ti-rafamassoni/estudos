const productStatusEnum = Object.freeze({ACTIVE:0, DONE:1, MISSED:2 });

function Product(desc, price) {
        this.status = productStatusEnum.ACTIVE;
        this.desc = desc;
        this.price = price;

    this.show = function () {
        console.log(+ this.status+ ": " +this.desc+ " R$" +this.price);
    };

}

const p1 = new Product("Banana", 2.0);
const p2 = new Product("Laranja", 1.0);
const productObjectList = [p1, p2];
/*const productObjectList_literal = [
    {
    status: productStatusEnum.ACTIVE, 
    desc: "Banana",
    price: 2.0,
    show: function () 
    {
        console.log(+ this.status+ ": " +this.desc+ " R$" +this.price);
    }
    }, 
    {
        status: productStatusEnum.ACTIVE, 
        desc: "Laranja",
        price: 1.0, 
    
    show: function () 
    {
        console.log(+ this.status+ ": " +this.desc+ " R$" +this.price);
    }
    }
    ];
*/
//const productList = ["Banana", "Laranja"];

function displayList() {
    clearList();
    const prodListBody = document.getElementById("table-body-prod");
    const tr = document.createElement("tr");
    prodListBody.appendChild(tr);
    const td1 = document.createElement("td");
    td1.innerHTML = "Ações";
    tr.appendChild(td1);
    const td2 = document.createElement("td");
    td2.innerHTML = "Descrição&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Preço";
    tr.appendChild(td2);



    for(let i = 0; i<productObjectList.length;i++) {
        const product_desc = productObjectList[i].desc;
        const product_price =  productObjectList[i].price;
        
        const filterText = document.getElementById('filter').value;
        if((product_desc.toLowerCase()).includes(filterText.toLowerCase())) { //para filtrar baseado no valor do input de productItem
            viewProduct(i, product_desc, product_price);
        }
        
    }

    function clearList() {
        const prodListBody = document.getElementById("table-body-prod");

        while (prodListBody.firstChild) {
            prodListBody.removeChild(prodListBody.firstChild);
        }
    }

    function viewProduct(i, product_desc,product_price) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        tr.appendChild(td);

        const buttonCheck = document.createElement("button")
        buttonCheck.classList.add("btn");
        buttonCheck.classList.add("btn-info");
        buttonCheck.textContent= "Apagar";

        buttonCheck.onclick = function (event) {
            deleteProduct(i);
        }
        td.appendChild(buttonCheck);


        const buttonEdit = document.createElement("button")
        buttonEdit.classList.add("btn");
        buttonEdit.classList.add("btn-info");
        buttonEdit.textContent= "Editar";


        td.appendChild(buttonEdit);


        const tdProd = document.createElement("td");
        const inputProd = document.createElement("input");
        inputProd.classList.add('text');
        inputProd.value = product_desc;
        inputProd.type = ('text');
        inputProd.setAttribute("readonly", "readonly");
        
        buttonEdit.onclick = function (event) {
            console.log(buttonEdit.innerHTML);
            if(buttonEdit.innerHTML.toLowerCase() == "editar") {
                console.log(event);
                buttonEdit.innerText ="Salvar"
                inputProd.removeAttribute("readonly");
                inputProd.focus();
            } else {
                buttonEdit.innerText ="Editar"
                inputProd.setAttribute("readonly", "readonly");
                editProduct(i,inputProd.value);
            }
        }
        

        const tdPrice = document.createElement("td");
        const inputProdPrice = document.createElement("input");
        inputProdPrice.classList.add('text');
        inputProdPrice.value = product_price;
        inputProdPrice.type = ('text');
        inputProdPrice.setAttribute("readonly", "readonly");
        
        tdProd.appendChild(inputProd); 
        tdProd.appendChild(inputProdPrice); 

        


        tr.appendChild(tdProd);


        const prodListBody = document.getElementById("table-body-prod");
        prodListBody.appendChild(tr);
    }


    function deleteProduct(index) {
        productObjectList.splice(index,1);
        displayList();

    }

    function editProduct(index, novoProdutoEditar) {
        let productOld = productObjectList[index];
        productOld.desc= novoProdutoEditar;
        productObjectList.splice(index, 1, productOld);
        displayList();

    }
}

displayList();

   
document.getElementById('addP').addEventListener('click',function (){
        productObjectList.push(new Product(document.getElementById('productItem').value, document.getElementById('productPrice').value ));    
        displayList();
    
    });

document.getElementById('filter').addEventListener('keydown',function (){
    displayList();
});


document.getElementById('filter').addEventListener('keyup',function (){
    displayList();
});



