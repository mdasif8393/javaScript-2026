function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
};

const myFather = new Person("John", "Doe", 50, "blue");


Person.changeName = function (name) {
    this.lastName = name;
}
myFather.changeName("Zaman");