//Objetos

const users = {
    name: "Diego",
    age: 30,
    address: {
        Rua: "Epitácio Pessoa",
        Número: "1601",
        Bairro: "Miramar",
        Cidade: "João Pessoa",
    },
}

document.body.innerText = ("name" in users);
// in checa se existe aquela chave dentro do objeto

document.body.innerText = Object.keys(users)
// Object.keys mostra todas as chaves dentro daquele objeto

document.body.innerText = JSON.stringify(Object.values(users));
// Object.keys mostra todas os valores

document.body.innerText = JSON.stringify(Object.entries(users));
// Object.keys mostra todas os valores

//Desestruturação: Remover parte do objeto para uma variável a parte

const address = users.address; //pode ser feito assim
const {address} = users; //ou assim
//nessa segunda forma posso criar variáveis diferentes para cada parte com apenas uma linha de código. Exemplo:
const {address, age} = users;

document.body.innerText = JSON.stringify({address, age});