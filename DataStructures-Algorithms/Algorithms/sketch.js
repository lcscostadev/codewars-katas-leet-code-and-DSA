const bubbleSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log("Swaped");
            }
        }
    }
    return arr;

}

const arr = [11, 54, 76, 22, 1, 2, 3, 8];
console.log(bubbleSort(arr));

// //////////////////////////////////////// //

const selectionSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr));