let arry = [2, 8, 5, 1, 3, 4];
let target = 5;

let arr = arry.sort((a, b) => a - b); // Sorting in ascending order

function binaryS(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // Use Math.floor to get an integer

        if (arr[mid] === target) { // Corrected comparison
            return mid;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1; // If the target is not found
}

console.log(binaryS(arr, target)); // Call the function with arguments