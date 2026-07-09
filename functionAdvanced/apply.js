const person1 = { name: "John" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function hello(message) {
    return message + " " + this.name;
}

console.log(hello.apply(person2, ["Hello"]));