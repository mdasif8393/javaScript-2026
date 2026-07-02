const numbers = [45, 4, 9, 16, 25];

function myFunc(total, value, index, arr) {
    return total + value;
}

const ans = numbers.reduceRight(myFunc);
console.log(ans);