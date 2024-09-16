function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the current element is the minimum
        let minIndex = i;

        // Find the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first unsorted element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(arr));
