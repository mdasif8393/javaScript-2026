function calculator(num1, num2, callback) {
    const sum = num1 + num2;

    callback && callback(sum)
};

calculator(5, 2, function (result) {
    console.log(result);
});
