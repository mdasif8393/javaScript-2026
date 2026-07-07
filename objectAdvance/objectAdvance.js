function Person(first, last, age, eyeColor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;

}

Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
}

const asif = new Person("Asif", "Zaman", 30, "black");

console.log(asif.name());