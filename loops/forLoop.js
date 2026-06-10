let cars = ["BMW", "Volvo", "Saab", "Ford"];

let len = cars.length;

let text = "";

for (let i = 0; i < len; i++) {
    if (i == 2) break;
    text += cars[i] + " ";
}

document.getElementById("demo").innerHTML = text;