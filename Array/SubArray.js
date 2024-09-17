function SubArr(arr) {
    let maxSum = Number.MIN_VALUE;
    let curSum = 0;

    for (let i = 0; i < arr.length; i++) {
        curSum += arr[i];
        maxSum = Math.max(maxSum, curSum);

        if (curSum < 0) {
            curSum = 0;
        }
    }

    console.log(maxSum);
}

let arr = [1, 2, 3, 4, 5];
SubArr(arr); // Maximum Subarray Sum
