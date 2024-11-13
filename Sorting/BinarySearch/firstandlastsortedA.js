let arr = [5,7,7,8,8,10,10];
let target = 10;

function firstandlastArray(arr, target) {
    let st = 0;
    let end = arr.length - 1;
    while(st <= end) {
        let mid = Math.floor(st + (end - st) / 2);

        if(arr[mid] === target) {
            if(arr[mid+1] === target) {
                return [mid, mid+1];
            }else{
                return [mid-1, mid];
            }
        }else if(arr[mid] < target) {
            st = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return [-1,-1];
}

console.log(firstandlastArray(arr,target));