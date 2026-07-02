const numbers = [45, 4, 9, 16, 25];

const ans = numbers.filter(myFunction);

console.log(ans);

function myFunction(value, index, array) {
    return value > 18;
}