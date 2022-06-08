/* Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31, 2^31 − 1]. For this problem, if the quotient is strictly greater than (2^31 - 1), then return (2^31 - 1), and if the quotient is strictly less than (-2^31), then return (-2^31). */

function divide(dividend, divisor){
    if(dividend === 0){
        return 0;
    }

    if(divisor === 1){
        return dividend;
    }

    const MAX = Math.pow(2,31) - 1;
    const MIN = Math.pow(2,-31);

    let quotient = 0;
    let absDivisor = Math.abs(divisor);
    let absDividend = Math.abs(dividend);

    if(absDividend === absDivisor){
        quotient += 1;
    }
    else{
        while(absDivisor <= absDividend){
            quotient += 1;
            absDivisor += Math.abs(divisor);
        }
    }

    if(quotient > MAX){
        return MAX;
    }

    if(quotient < MIN){
        return  MIN;
    }

    if( (dividend<0 && divisor>0) || (dividend>0 && divisor<0)){
        quotient = quotient*(-1);
    }

    return quotient;
}

var result = divide(7, -3);
console.log(result);