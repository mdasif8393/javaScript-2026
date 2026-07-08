

//* count vowel
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowel(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function (value, index, array) {
        if (vowels.includes(value)) {
            count++
        }
    })

    return count;
}

const totalVowels = (countVowel("I Love Bangladesh"));
console.log(totalVowels);