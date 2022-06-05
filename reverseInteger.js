/* Given a signed 32-bit integer 'x', return 'x' with its digits reversed. If reversing 'x' causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0. */

function reverse(x){
    const lowerLimit = Math.pow(-2,31);
    const higherLimit = Math.pow(2,31) - 1;

    let sign = (x < 0) ? -1 : 1;

    x = Math.abs(x);

    let sum = 0;
    while(x > 0){
        let remainder = x % 10;
        sum = (sum*10) + remainder;
        x = Math.floor(x/10);
    }

    sum = sum * sign;
    
    return (sum > higherLimit || sum < lowerLimit) ? 0 : sum;
}

var result = reverse(-342);
console.log(result);