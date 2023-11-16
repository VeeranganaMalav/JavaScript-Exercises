/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string 's', return true if it is a palindrome, or false otherwise. */

var isPalindrome = function(s) {
    let str = "";

    for(let i=0; i<s.length; i++){
        if((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z") || 
        (s[i] >= "0" && s[i] <= "9")){
            str += s[i];
        }
    }

    str = str.toLowerCase();
    // console.log(str);

    let mid = Math.floor(str.length/2);

    let leftStr, rightStr;

    if(str.length%2 === 1){
        rightStr = str.slice(mid+1);
        leftStr = str.slice(0, mid);
        console.log(rightStr, leftStr);
    }
    else{
        rightStr = str.slice(mid);
        leftStr = str.slice(0, mid);
        console.log(rightStr, leftStr);
    }

    if(leftStr.split("").reverse().join("") === rightStr){
        return true;
    }
    else{
        return false;
    }

};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));