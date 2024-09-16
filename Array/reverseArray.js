let arr = [2, 1, 5, 3, 8];


function swap (arr, start, end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        swap(arr, start, end);
        start++;
        end--;
    }
    return arr;
    
        
}
 

console.log(reverseArray(arr));