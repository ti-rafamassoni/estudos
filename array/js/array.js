const productList = ["banana", "larana"];

function displayList() {
    clearList();
    for(let i = 0; i<productList.length;i++) {
        const product = productList[i];
        
        const filterText = document.getElementById('produtItem').value;
        if(product.includes(filterText))
        //if(//includes) para filtrar baseado no valor do input de Filtra
        viewProduct(i, product);
        
    }

    function clearList() {
        const prodListBody = document.getElementById("table-body-prod");

        while (prodListBody.firstChild) {
            prodListBody.removeChild(prodListBody.firstChild);
        }
    }

    function viewProduct(i, product) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        tr.appendChild(td);

        const buttonCheck = document.createElement("button")
        buttonCheck.classList.add("btn");
        buttonCheck.classList.add("btn-info");
        buttonCheck.textContent= "Ok";

        buttonCheck.onclick = function (event) {
            deleteProduct(i);
        }
        td.appendChild(buttonCheck);

        const tdProd = document.createElement("td");
        tdProd.textContent = product;
        tr.appendChild(tdProd);


        const prodListBody = document.getElementById("table-body-prod");
        prodListBody.appendChild(tr);
    }


    function deleteProduct(index) {
        productList.splice(index,1);
        displayList();

    }
}

displayList();


document.getElementById('addP').addEventListener('click',function (){
    productList.push(document.getElementById('productItem').value);    
    displayList();

});



