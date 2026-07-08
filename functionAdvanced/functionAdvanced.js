function a(x) {
    x.one = 7;

    return x.one * x.two;
}

let m = {
    one: 4,
    two: 5
};

console.log(a(m));

console.log(m);