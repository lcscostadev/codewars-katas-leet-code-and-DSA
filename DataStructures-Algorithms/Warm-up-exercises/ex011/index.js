// Write a function to find the longest word in a string.

const findLargestString = (str) => {
    let words = str.split(" ");
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;

        if (length > maxLength) {
            maxLength = length;
        }
    }
    return maxLength;
}

console.log(findLargestString("Hello my name is Lucas"));

// probably this has something about counting no spaced characters AKA a word, the word with no spaces and more length is our longest word