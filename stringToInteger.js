/* Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
1.Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
2.Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
3.Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
4.If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
5.Return the integer as the final result. */

function myAtoi(s){
    let digit = '';
    let sign = '';
    
    for (let i=0; i<s.length; i++) {

        // Ignore leading space
        if (digit.length === 0 && sign.length === 0 && s[i] === ' ') {
            continue;
        }
        else if (digit.length === 0 && sign.length === 0 && (s[i] === '-' || s[i] === '+')) {
            // Recognized leading plus/minus sign
            sign = s[i];
        }
        else if ((digit.length > 0 || sign.length > 0) && isDigit(s[i]) === false) {
            // Digit already populated, ignore following non-digit
            break;
        }
        else if (isDigit(s[i]) === true) {
            // Record digit
            // digit += s[i];
            digit = digit.concat(s[i]);
        }
        else {
            break;
        }
    }
    
    // Parsing digit
    let parsedDigit = parseInt(digit);
    
    // If parsing failed, return 0
    if (isNaN(parsedDigit) === true) {
        return 0;
    }
    
    // Check sign
    if (sign === '-') {
        parsedDigit = parsedDigit * (-1);
    }

    // Handle 32 bit signed integer range
    if (parsedDigit > (Math.pow(2,31) - 1) ) {
        parsedDigit = Math.pow(2,31) - 1;
    }
    else if (parsedDigit < Math.pow(-2,31)) {
        parsedDigit = Math.pow(-2,31);
    }
    
    return parsedDigit;
}

var isDigit = function (s) {
    return s === '0' || s === '1' || s === '2' || s === '3' || s === '4' || s === '5' || s === '6' || s === '7' || s === '8' || s === '9';
}

var result = myAtoi("   -42");
console.log(result);