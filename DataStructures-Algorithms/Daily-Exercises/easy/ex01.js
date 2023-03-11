// Easy: Given an array of integers, find the sum of all the even integers in the array.

// const sumInt = (arr) => {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// const my_arr = [6, 5, 4, 20, 22, 15, 17, 12];
// sum = sumInt(my_arr);
// console.log(sum);

// array of integers = arr
// loop through the array to see all items
// find the sum = variable sum and concatenates with our current even element


const bubbleSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const my2_arr = [5, 22, 1, 6, 43, 2, 4, 65];
n = bubbleSort(my2_arr);

console.log(n);