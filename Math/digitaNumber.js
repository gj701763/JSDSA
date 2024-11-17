function digitaSignalNumber(n) {
    while (n !== 0) {
        let num = n % 10;
        console.log(num);
        n = Math.floor(n / 10);
    }
}


var countNumber = (n) => {
    let count = 0;
    while(n !== 0) {
        let num = n % 10;
        count++;
        n = Math.floor(n / 10);
    }
    console.log(count);
}


var sumOfNumber = (n) => {
    let sum = 0;
    while (n !== 0) {
        let num = n % 10;
        sum += num;
        n = Math.floor(n / 10);
    }
    console.log(sum);
}

let n = 3443;
//digitN(n);
//sumOfNumber(n);
//countNumber(n);