let arr = [2, 4, 55, 55, 2, 4, 18, 18];

function duplicate (arr) {
    if(!arr.length || arr.length === 1) return [];
    const hist = new Array(arr.length+1).fill(0);
    for(let i = 0; i < arr.length; i++) {
        hist[arr[i]]++;
    }
    return hist.map((e, i) => e > 1 ? i : -1).filter((e) => e !== -1);
}

console.log(duplicate(arr));