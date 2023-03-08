// recursive way

const factorial = (n) => {

    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

const factorialIterative = (n) => {
    let result = 1;

    if (n === 0) {
        return 1;
    }

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorialIterative(5));