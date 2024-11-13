let arr = [1,1,2,2,3,4,4,5,5];

function singleElement(arr) {
    let st = 0;
    let end = arr.length-1;

    while(st <= end) {
        let mid = Math.floor(st + (end - st) / 2);

        if(arr[mid-1] !== arr[mid] && arr[mid+1] !== arr[mid]) {
            return arr[mid];
        }
        if(mid % 2 == 0) {
            if(arr[mid-1] === arr[mid]) {
                end = mid - 1;
            }else{
                st = mid + 1;
            }
        }else{
            if(arr[mid-1] === arr[mid]) {
                st = mid + 1;
            }else{
                end = mid - 1;
            }
        }
    }
    return -1;
}

console.log(singleElement(arr));