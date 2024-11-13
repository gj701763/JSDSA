let arr = [0,2,3,5,11,13,6,8,9];


function moutainPeak(arr) {
    let st = 1;
    let end = arr.length-2;

    while(st <= end) {
        let mid = Math.floor(st + (end - st) / 2)
        if(arr[mid-1] < arr[mid] && arr[mid + 1] < arr[mid] ) {
            return arr[mid];
        }else if(arr[mid-1] < arr[mid]) {
            st = mid + 1;
        }
        else {
            end = mid -1;
        }
    }
    return -1;
}

console.log(moutainPeak(arr));