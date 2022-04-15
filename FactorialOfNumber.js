function factorial(number){
    if(number == 0){
        return 1;
    }
    return number * factorial(number-1);

}

const num = prompt("Enter a number");
console.log("Factorial of " + num + " is " + factorial(num));