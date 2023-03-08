// Given a string, check if it is a palindrome.

/*
    make the user write some text, and we will write a function that checks if the string in reversed is the same of the initial string, first we need to find a way of reversing it, we can use split, reverse, join.
*/

let word = prompt("Write a text here: ");

const itsPalindrome = () => {
    let reverseWord = word.split("").reverse().join("");
    if (word === reverseWord) {
        alert(`the word ${word} is a palindrome because is the same as ${reverseWord}`);
    } else {
        alert("Its not an palindrome");
    }
}

itsPalindrome();
