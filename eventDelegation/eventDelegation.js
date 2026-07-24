const list = document.getElementById("list");

list.addEventListener("click", function (event) {
    if (event.target.matches('li')) {
        event.target.style.backgroundColor = "yellow";
    }
    console.dir(event.target);
})

function addElement() {
    const newElement = document.createElement("li");
    newElement.textContent = "Dot net";
    list.appendChild(newElement);
}