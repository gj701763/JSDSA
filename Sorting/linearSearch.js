let arr = [2, 1, 78, 5, 3, 1];
let key = 78;

function LinearSearch(arr, key) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === key){
            return i;
        }
    }
    return -1;
}

console.log(LinearSearch(arr, key));