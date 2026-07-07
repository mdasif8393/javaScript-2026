const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50, eyeColor: "blue"
}

const x = person;

x.age = 18;

console.log(person.age);