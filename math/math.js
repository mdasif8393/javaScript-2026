function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRndInteger(1000, 9999);
console.log(randomNumber);