// Iterative

// For Loop
function getFactorialForLoop(n) {
    let result = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "n has to be positive";
    }
}

// While Loop

function getFactorialWhileLoop(n) {
    let result = 1;
    while (n > 1) {
        result = result * n;
        n -= 1;
    }
    return result;
}

// Recursive

function getFactorialRecursively(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * getFactorialRecursively(n - 1);
    }
}