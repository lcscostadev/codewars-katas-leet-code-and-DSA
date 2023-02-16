// Factorial
// factorial(n) = n * factorial (n-1)

// factorial(1) = 1;

// fact(4) = 4 * 3 * 2 * 1 = 24

// there is two ways of making a factorial, iterative or recursive


const factorial = (n) => {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(4));
// We basically want to find in this example, factorial of 4, but first we need to find the factorial of 3 and so on until we reach 1, now that we know every factorial of each number, we can loop back to gave the asnwer of factorial 4, which means we first stack all previous numbers factorials since we need to remove 1 from the number until we find every factorial for every number and then we can come back and give the answer for the number that we want.

// 4 * 3 * 2 * 1 = 24