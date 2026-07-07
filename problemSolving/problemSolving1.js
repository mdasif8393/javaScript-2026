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

//* Leap Year
function isLeapYear(year) {
    if (((year % 400 === 0) || (year % 4 === 0)) && year % 100 !== 0) {
        console.log(`${year} is a leapyear`);
    }
    else {
        console.log(`${year} is not a leapyear`);
    }
}

isLeapYear(2028)

//* count vowel
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowel(sentence) {
//     let count = 0;
//     const letters = Array.from(sentence);
//     letters.forEach function(value, index, array) {

//     }

// }

// console.log(countVowel("I Love Bangladesh"));