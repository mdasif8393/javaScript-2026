function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = getRndInteger(1, 6);
console.log(result);