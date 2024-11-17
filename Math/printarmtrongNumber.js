let n = 100;
let print = [];
for(let i = 1; i <= n; i++) {
    let copyNum = i;
    let sumOfcube = 0;
    while(i !== 0) {
        let digit = i % 10;
        sumOfcube += (digit * digit * digit);
        i = Math.floor(i / 10);
    }
    if(copyNum === sumOfcube) {
        console.log("is a armstrong Number" +" " + i);
    }
    else{
        console.log("is not a armstrong Number" + i);
    }
}

