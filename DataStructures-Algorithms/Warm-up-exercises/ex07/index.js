// Write a function to remove all whitespace from a string.

const removeSpaces = () => {
    let word = "Please remove my spaces";

    let result = word.split(" ").join("");
    return result;
}

let result = removeSpaces();

console.log(result);