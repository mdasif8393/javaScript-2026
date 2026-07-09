function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);

console.log(double());