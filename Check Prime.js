function isPrime(num){
    if(num <= 1){
        return " is not prime";
    }
    
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i == 0){
            return " is not prime";
        }
    }
    return " is prime";
}

let number = prompt("Enter a number");
console.log(number + isPrime(number));