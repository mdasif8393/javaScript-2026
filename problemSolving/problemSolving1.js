// *random number between 1 to 6
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = getRndInteger(1, 6);
console.log(result);

//* Alphabetically sort names
const students = ["Sumit", "Saad", "Daiyan"]
console.log(students.sort());

//* roll number sort
const roll_numbers = [3, 5, 1, 6, 2, 30];
const sortRoll = roll_numbers.sort(function (a, b) { return a - b });
console.log(sortRoll);