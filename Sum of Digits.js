function sumOfDigits(number){
    let sum = 0;
    while(number != 0){
        let rem = number%10;
        sum += rem;
        number = Number.parseInt(number/10);
    }

    return sum;
}

console.log(sumOfDigits(414));
console.log(sumOfDigits(2913));