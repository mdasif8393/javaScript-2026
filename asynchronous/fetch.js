// Async function to download a file
async function loadText() {
    try {
        const response = await fetch("fetch.txt");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        myDisplayer(await response.text());
    } catch (err) {
        myDisplayer(err.message);
    }
}