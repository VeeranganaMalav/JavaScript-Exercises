// Implement pow(x, n), which calculates 'x' raised to the power 'n' (i.e., x^n).

function myPow(x, n){
    if(n === 0){
        return 1;
    }

    if(n === 1){
        return x;
    }

    if(n > 1){
        if(n%2 === 1){
            return x*myPow(x, n-1);
        }
        else if(n%2 === 0){
            return myPow(x*x, n/2);
        }
    }
    else if(n < 0){
        return myPow(1/x, n*(-1));
    }
}

var result = myPow(2.10000, 3);
console.log(result);