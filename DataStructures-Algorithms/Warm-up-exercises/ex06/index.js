// Write a function to reverse a string.

const reverseString = () => {
    let word = prompt("Type the word that you want to reverse it");

    let reversedWord = word.split("").reverse().join("");

    console.log(`Your word was ${word} and the reversed version of your word is ${reversedWord}`);
}

reverseString();