// Write a function to check if a given string is a palindrome.

const isPalindrome = () => {
    let word = "dood";
    let reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
        console.log("Its a palindrome");
    } else {
        console.log("Its not a palindrome")
    }
    return reversedWord;
}

console.log(isPalindrome());