// Given an integer 'n', return the number of prime numbers that are strictly less than 'n'.


function countPrimes(n){

    let count = 0;
    if(n===0 || n===1){
        return count;
    }

    for(let i=2; i<n; i++){
        count += isPrime(i) ? 1 : 0;      
    }

    return count;
}

var isPrime = function(num){
    let root = Math.sqrt(num);
    for(let j=2; j<=root; j++){
        if(num%j === 0){
            return false;
        }      
    }
    return true;
}

var result = countPrimes(7);
console.log(result);