/* Create a function repeatString that accepts two arguments...the string to repeat, and a number that represents how many times to repeat the string. Return a string that concatenates the number of times the string is repeated. */

function repeatString(str, count){
    let resultString = "";
    if(count == 0){
        resultString.concat(`''`);
    }

    let i = 1;
    while(i <= count){
        resultString = resultString.concat(str);
        i++;
    }

    return `'${resultString}'`;
}

console.log(repeatString("yo",4));
console.log(repeatString("yo",0));
console.log(repeatString("bye",6));