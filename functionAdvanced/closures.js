function myCounter() {
    let counter = 0;

    return function () {
        counter++;
        return counter;
    }
}


const add = myCounter();

add();
add();
const res = add();
console.log(res);

// console.dir(add);
// add();
// // console.dir(add);
// add();
// // console.dir(add);
// // add();


