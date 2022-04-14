function fibonacciSeries(number){
    if(number == 0 || number == 1){
        return number;
    }
    else{
        return (fibonacciSeries(number-1) + fibonacciSeries(number-2));
    }
}

const numberOfTerms = prompt("Enter the number of terms in series");
let term = 0;
for(let i=1; i<=numberOfTerms; i++){
    console.log(fibonacciSeries(term));
    term++;
}
