/* Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python. */

var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }
    else {
        for (let i=0; i<x; i++) {
            if (i*i === x) {
                return i;
            }
            else if ( (i+1)*(i+1) > x ) {
                return i;
            } 
        }
    }
};

const x = 4;
console.log(mySqrt(x));