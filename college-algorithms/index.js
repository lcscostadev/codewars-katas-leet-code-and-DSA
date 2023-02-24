// Develop a program that reads a sequence of numbers, which can end with the number 0 or 9. For each number read (different from 0 or 9), show its successor if the number is even, or its predecessor if the number is odd .

let num;

do {
    if (num !== 0 && num !== 9) {
        num = parseInt(prompt("Write a number"));
        if (num % 2 == 0) {
            console.log(`Number ${num}so his Successor = ${num + 1}`);
        } else {
            console.log(`Number ${num} so his Predecessor is = ${num - 1}`);
        }
    }
} while (num !== 0 && num !== 9);

// Develop a program that reads a sequence of letters (a... z) ending in a dot (.) and that shows how many times each vowel (a, e, i, o, u) appeared in the list.


let letter;
let countA = 0, countE = 0, countI = 0, countO = 0, countU = 0;

while (letter != '.') {
    letter = prompt("Write a letter");
    switch (letter) {
        case 'a':
            countA++;
            break;
        case 'e':
            countE++;
            break;
        case 'i':
            countI++;
            break;
        case 'o':
            countO++;
            break;
        case 'u':
            countU++;
            break;
        default:
            console.log("You didn't wrote a vowel");
            break;
    }
}


console.log(`we have ${countA}, ${countE}, ${countI}, ${countO}, ${countU}`);

// Write a program in which the user types his name and his 2 school grades, then his name and average will appear in an alert, and then they will be saved in an array with his registered data.


const users = [];

while (true) {
    let name = prompt("Write your name here");

    let grade1 = parseFloat(prompt("Insert first grade here"));
    let grade2 = parseFloat(prompt("Insert second grade here"));

    let average = (grade1 + grade2) / 2;

    alert(`Dear ${name}, your average was ${average.toFixed(2)}`)

    if (!name) {
        break;
    }

    users.push({ name, grades: [grade1, grade2], average });
}

console.log(users);

// Write a program where the user enters 10 numbers and the highest number entered is displayed in the console.

let biggerNum = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseFloat(prompt("Write a number"));
    if (num > biggerNum) {
        biggerNum = num;
    }
}

console.log(biggerNum);


// Develop a program that reads the salary of 10 employees of a company, calculates and displays the highest salary and the average salary of the company.

let biggerSalary = 0;
let sum = 0;
let average;

for (let i = 0; i <= 3; i++) {
    let salary = parseFloat(prompt("Digite seu salary"));
    sum += salary;
    if (salary > biggerSalary) {
        biggerSalary = salary;
    }
    average = sum / 3;
}

console.log(`The bigger sallary was ${biggerSalary} and the average salary was ${average}`);