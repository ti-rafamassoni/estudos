class Person {
    
    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }

    setAge (idade) {
        if(typeof idade == "number") {
            this.age = idade;
        } else {
            alert("Informar idade");
        }
    }
}


let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.takeAStep();
console.log(`Passos de ${p1.name}: ${p1.steps}`);

p1.setAge("jkkk");
console.log(p1.age);