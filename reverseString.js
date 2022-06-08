/* Write a function that reverses a string. The input string is given as an array of characters 's'. You must do this by modifying the input array in-place with O(1) extra memory. */

function reverseString(s){
    let right = s.length-1;
    let left = 0;

    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }

    return s;
}

var result = reverseString(["H","a","n","n","a","h"]);
console.log(result);