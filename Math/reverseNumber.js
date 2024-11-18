
function ReverseNum(n) {
    let reverNum = 0;
    const MAX_VALUE = Number.MAX_SAFE_INTEGER;
    const MIN_VALUE = Number.MIN_SAFE_INTEGER;
    let sing = n < 0 ? -1 : 1;
    n = Math.abs(n);
    while(n !== 0) {
        let digit = n % 10;
        if(reverNum > MAX_VALUE/10 || reverNum < MIN_VALUE/10) {
            return 0;
        }
        reverNum =  reverNum * 10 + digit
        n = Math.floor(n / 10);
    }
    return reverNum * sing
}
let n = 23457547876
console.log(ReverseNum(n));