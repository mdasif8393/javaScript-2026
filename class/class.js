class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    play(x) {
        console.log(`${this.name} plays ${x}`);
    }
}

const sakib = new Person("Sakib", 32);
const tamim = new Person("Tamim", 35);

sakib.play("cricket");