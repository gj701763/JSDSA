let arr = [15,17,20];
let n = 3, m = 2;

var isValid =(arr, n, m, maxAllowpages) => {
    let students = 1, pages = 0;

    for(let i = 0; i < n; i++) {
        if(arr[i] > maxAllowpages) {
            return false;
        }
        if(pages + arr[i] <= maxAllowpages) {
            pages += arr[i];
        }else{
            students++;
            pages = arr[i];
        }
    }

    return students > m ? false: true;
}

function allocateBooks(arr, n,m) {
    if(m > n) {
        return -1;
    }

    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += arr[i];
    }
    let ans = -1;
    let st = 0; 
    let end = sum;

    while(st <= end) {
        let mid = Math.floor(st + (end-st) / 2);

        if(isValid(arr,n,m,mid)) {
            ans = mid;
            end = mid-1;
        }else{
            st = mid + 1;
        }
    }
    return ans;
}

console.log(allocateBooks(arr,n,m));