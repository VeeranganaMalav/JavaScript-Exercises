function isPalindrome(str){
    str = str.toLowerCase();

    let reverseString = str.split('').reverse().join('');
    if(str.localeCompare(reverseString) == 0){
        return " is a Palindrome";
    }
    else{
        return " is not a Palindrome";
    }
}

let number = prompt("Enter a number");
console.log(number + isPalindrome(number.toString()) );

let string = prompt("Enter a string");
console.log(string + isPalindrome(string));