const person = {
    firstName: "John",
    lastName: "Doe",
    age: 15,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    isVoter: function () {
        if (this.age >= 18) {
            return "Voter";
        }
        else {
            return "Is not voter";
        }
    }
};

const voter = person.isVoter();
console.log(voter);