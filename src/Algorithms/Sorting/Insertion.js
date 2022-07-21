import { swap } from "./helper.js";

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j + 1] < arr[j]) {
                swap(arr, j, j + 1);
            } else {
                break;
            }
        }
    }
    return arr;
}

console.log(insertionSort([4, 3, 5, 6, 7, 2, 1]));