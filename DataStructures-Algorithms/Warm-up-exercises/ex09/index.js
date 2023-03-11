// Write a function to count the number of vowels in a string.

let nameUser = prompt("Type your name here: ");

const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelsCount = 0;

for (let i = 0; i < nameUser.length; i++) {
    if (vowels.includes(nameUser[i])) {
        vowelsCount++;
    }
}

console.log(` in the name user ${nameUser} there is ${vowelsCount} vowels`);