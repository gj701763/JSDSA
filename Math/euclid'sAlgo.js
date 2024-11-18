// Euclid's Algorithm base on Greatest Common divisor (GCD)

// Least/lowest Common Multiple(LCM) 

// LCM of (a, b) = ( a * b) / GCD


function gcdc(a, b) {
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

function lcm(a, b) {
    let gcd = gcdc(a,b);
    return (a * b) / gcd
}

let a = 20, b = 28
console.log(lcm(a,b))
//console.log(gcdc(a,b))