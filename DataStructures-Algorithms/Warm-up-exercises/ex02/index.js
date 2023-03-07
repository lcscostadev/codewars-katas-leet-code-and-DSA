// Write a function to convert a temperature from Fahrenheit to Celsius.


const convertFahrenheitToCelcious = (fahrenheit) => {
    let celsious = (fahrenheit - 32) * 5 / 9;
    return celsious;
}

let fahrenheit = 70;
let celsious = convertFahrenheitToCelcious(fahrenheit);
console.log(`${fahrenheit} in celsious is ${celsious.toFixed(2)}`);
