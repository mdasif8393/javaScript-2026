const confirm = document.getElementById("confirm");

const prompt = document.getElementById("prompt");

function showConfirm() {
    const ans = window.confirm("Press OK or Cancel");
    console.log(ans);
}

function showPrompt() {
    console.log(window.prompt("Please enter your name"));
}