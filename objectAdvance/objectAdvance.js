const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

const myObj = Object.assign(person1, person2);
console.log(myObj);