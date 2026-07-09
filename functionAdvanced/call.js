const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " lives in " + city + ", " + country;
    }
}

const person1 = {
    firstName: "Asif",
    lastName: "Zaman"
}

const person2 = {
    firstName: "Abid",
    lastName: "Zaman"
}

const ans = person.fullName.call(person2, "Khulna", "Bangladesh");
console.log(ans);