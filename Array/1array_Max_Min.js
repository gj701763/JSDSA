let arr = [1, -200, 3, 40, 5, -600, 7, 80, 90, 10];

function array (arr) {
    let max = Number.MIN_VALUE; // 5e-324
    let min = Number.MAX_VALUE; // 1.7976931348623157e+308
    for (const element of arr) {
        if (element > max) {
            max = element;
        }
        if(element < min) {
            min = element;
        }
        
    }
    return [min, max];    
}

console.log(array(arr));

