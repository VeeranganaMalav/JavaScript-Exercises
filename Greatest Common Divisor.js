function gcd(a, b){
    if(b == 0){
        return a;
    }

    return gcd(b, a%b);

}

const firstNumber = prompt("Enter the first number")
const secondNumber = prompt("Enter the second number")
console.log(gcd(firstNumber, secondNumber));