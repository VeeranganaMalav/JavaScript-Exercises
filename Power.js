function power(base, exponent){
    if(exponent == 0){
        return 1;
    }

    return base * power(base, exponent-1);
}

const base = prompt("Enter base number")
const exponent = prompt("Enter the exponent")
console.log(base + " raised to the " + exponent + " is " + power(base, exponent));