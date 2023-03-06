// Write a function to check if a given number is even or odd.

/*
    1- create a variable to store the user input
    2- create a function to solve the problem
    3- do an if statment that checks if the reminder of the number is 0 or not (even or odd).
*/

// Creating an variable to store the user's input
let userNumber = parseInt(prompt("Type here a number: "));

// Creating a function to solve the problem
const evenOrOdd = (userNumber) => {
    // if statment to check if the reminder is 0 or not
    if (userNumber % 2 === 0) {
        alert(`The number ${userNumber} is even`);
    } else {
        alert(`The number ${userNumber} is odd`);
    }
}

console.log(evenOrOdd(userNumber));

/*
    To solve this problem i've used, variables, parseInt to convert prompt to integers, prompt to get the user's input value, an arrow function that passes the user input value, an if statment to check if the reminder of the user's number is odd or even, alert to show to the user if the number he typed is odd or even.
*/