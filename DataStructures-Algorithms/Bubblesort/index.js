
const bubbleSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // the - 1 its because since every iteration 'one' value is going to be in the right order we use - 1 to not iterate again unnecesarily this value in the right position
        for (let j = 0; j < n - i - 1; j++) {
            // if the current position is bigger than the next position we swap the position of values
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                // we swap here their positions
                // the current value it becames the next value
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// we use n - 1 to grab the second last number of the array, since we looper through we already have an last number sorted.

const arr = [12, 34, 6, 7, 22, 11, 15];
console.log(bubbleSort(arr));

// Desired output
6, 7, 11, 12, 15, 22, 14