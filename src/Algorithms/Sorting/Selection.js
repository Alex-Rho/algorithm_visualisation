import { swap } from "./helper.js";

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (lowest != i) {
            swap(arr, lowest, i);
        }
    }

    return arr;
}

console.log(selectionSort([4, 3, 2, 1]));