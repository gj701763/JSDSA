function isPrimes(n) {
    let isPrime = (n+1, true);
    let count = 0;
    for(let i = 2; i < n; i++) {
        if(isPrime[i]) {
            count++;

            for(j = i * 2; j < n; j = j + i) {
                isPrime[j] = false;
            }
        }
    }

    return count;
}

let n = 10;
console.log(isPrimes(n)); 