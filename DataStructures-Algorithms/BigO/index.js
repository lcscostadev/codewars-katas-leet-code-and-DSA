// Here is a few examples of existing code to practice

// Here is the 3 steps to calculate complexity
// 1 - leave in consideration only the code repetitions
// 2 - verify the complexity of the function and methods of the language
// 3 - ignore constants and use only the highest degree term

// Example 01
// Complexity is O(n);
const func1 = (v, x) => {
    let size = v;
    for (let i = 0; i < size; i++) { // O(n) -> linear
        if (v[i] === x) return true; // O(1) -> constant
    }
    return false; // O(1) -> constant
}



// Example 02
const func2 = (v) => {
    let size = v; // O(1)
    for (let i = 0; i < size; i++) { //O(n)
        for (let j = 0; j < size; j++) { //O(n)
            if (i != j && v[i] === v[j]) { //O(1)
                return true;
            }
        }
    }
    return false; //O(1)
}

// O(N) * O(N) --> O(N^2)

// Example 03

const func3 = (v) => {
    let size = v; //O(1)
    let bla = 0; //O(1)
    for (let i = 0; i < size; i++) { //O(n)
        for (let j = 0; j < size; i++) { //O(n)
            if (v[i] === v[j]) { //O(1)
                bla++;
            }
        }
    }

    let ble = 0;
    for (let i = 0; i < size; i++) { //O(n)
        if (v[i] == 10) {
            ble = 2 * ble;
        }
    }

    let bli = 0;
    for (let i = 0; i < size; i++) { //O(n)
        if (v[i] == 5) {
            bli += 5;
        }
    }

    return bla + ble + bli;
}

// O(n)*O(n) + O(n) +  O(n)
// O(n^2) + 2*O(n) ignoring the costant '2'
// O(n^2) + O(n) using the highest degree term
// O(n^2)

// Example 04