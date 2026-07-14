function myFunction(text) {
    console.log(text);
}

const button = document.getElementById("click");
const container = document.getElementById("container");

button.addEventListener('click', function () {
    myFunction("Hello Button");
}, true);

container.addEventListener('click', function () {
    myFunction("Hello div");
}, true)

