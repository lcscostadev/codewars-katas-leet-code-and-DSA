// Implement a binary search algorithm.

// middle formula
// midle = Math.floor((low + high) / 2);



const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        // we check if we found our guy
        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            // we go further in the book
            low = middle + 1;
        } else {
            // we go back at the book
            high = middle - 1;
        }
    }

    return -1;
}

