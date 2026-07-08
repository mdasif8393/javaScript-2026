"use strict"
// Create Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

Object.freeze(person);


const ans = Object.isFrozen(person);
console.log(ans);