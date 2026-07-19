const jsonString = '{"name":"John", "birth": "1982-12-14", "city": "New York"}';
const myObj = JSON.parse(jsonString, function (key, value) {
    if (key === 'birth') {
        return new Date(value);
    }
    return value;
})


console.log(myObj);