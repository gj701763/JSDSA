const isArmstorng = (n) => {
    let copyNum = n;
    let sumOfcube = 0;
    while(n !== 0) {
        let digit = n % 10;
        sumOfcube += (digit * digit * digit);
        n = Math.floor(n / 10);
    }

    return sumOfcube === copyNum
}

let n = 153;
if(isArmstorng(n)) {
    console.log("Number is Armstrong");
}else{
    console.log("Number is not a Armstrong");
}