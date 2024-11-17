// Greatest Common Divisor
let a = 50, b = 50;


function Gcd(a, b) {
    if(a === 0) {
        return b;
    }else if(b === 0) {
        return a;
    }else if(a === b) {
        return a;
    }
    let gcd = 1;
    for(let i = 1; i <= a && i <= b; i++) {
        if( a % i === 0 && b % i === 0) {
            gcd = i;
           
        }
    }
    return gcd;
    
}

console.log(Gcd(a,b));