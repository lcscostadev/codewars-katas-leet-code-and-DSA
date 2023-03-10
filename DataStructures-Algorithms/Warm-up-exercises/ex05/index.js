// Write a function to calculate the sum of all numbers in an array.

const sumArr = (arr) => {
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const new_arr = [5, 3, 23, 8, 7, 4, 354];
console.log(sumArr(new_arr));
