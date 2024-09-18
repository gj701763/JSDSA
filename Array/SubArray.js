function SubArr(arr) {
    let maxSum = arr[0];
    let curSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        curSum = Math.max(arr[i], curSum + arr[i]); // Either start fresh at arr[i] or continue with curSum
        maxSum = Math.max(maxSum, curSum); // Keep track of the maximum sum encountered
    }

    console.log(maxSum);
}

let arr = [-1, -2, -3, -4, -5];
SubArr(arr); // Maximum Subarray Sum
