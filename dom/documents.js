const p = document.getElementById("demo");

const way1 = p.innerHTML;

const way2 = p.firstChild.nodeValue;

const way3 = p.childNodes[0].nodeName;

console.log(way3);