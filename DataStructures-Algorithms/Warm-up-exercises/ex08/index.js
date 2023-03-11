// Write a function to find the maximum number in an array.

const findMaximum = (arr) => {
    maxNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

const my_arr = [1, 5, 7, 6, 9, 6, 4]
maxNum = findMaximum(my_arr);

console.log(maxNum)