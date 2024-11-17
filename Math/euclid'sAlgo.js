// Euclid's Algorithm base on Greatest Common divisor (GCD)


function gcd(a, b) {
    while(a > 0 && b > 0) {
        if(a > b) {
            a = a % b
        }else{
            b = b % a
        }
    }
    if(a === 0) return b
    return a
}

let a = 50, b = 50
console.log(gcd(a,b))