let arr = [1,2,3,4];

let ans = [];

function product(arr, ans) {
    for(let i = 0; i < arr.length; i++) {
        let pro = 1;
        for(j = 0; j < arr.length; j++) {
            if( i !== j) {
                pro *= arr[j];
            }
        }
        ans[i] = pro;
    }
    
    return ans;
}


console.log(product(arr,ans));