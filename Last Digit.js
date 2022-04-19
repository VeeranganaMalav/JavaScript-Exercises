/* The lastDigit function accepts two non-negative integer arguments and returns true or false if they have the same last digit.
For example, lastDigit accepts two non-negative integer values. Return true if both number arguments have the same last digit, such as 27 and 57 and false if the last two digits are not equal, such as 998 and 999. */

function lastDigit(number1, number2){
    if( (number1%10) == (number2%10)){
        return true;
    }
    else{
        return false;
    }
}

console.log(lastDigit(22,32));
console.log(lastDigit(77,999));
console.log(lastDigit(33,3));