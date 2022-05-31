// Given a string s, return the longest palindromic substring in s.

function longestPalindrome(s){
    let start = 0;
    let maxLength = 1;
    let n = s.length;

    if(n <= 1){
        return s;
    }

    for(var i=0; i<n; i++){
        let left = i-1;
        let right = i+1;

        while( (left >= 0) && (s[left] == s[i]) ){
            left--;
        }

        while( (right < n) && (s[right] == s[i]) ){
            right++;
        }

        while( (left >=0 ) && (right < n) && (s[left] == s[right]) ){
            left--;
            right++;
        }

        let currentLength = right-left-1;
        if(maxLength < currentLength){
            maxLength = currentLength;
            start = left+1;
        }
    }

    return s.substring(start, start+maxLength);
};

var result = longestPalindrome("babad");
console.log(result);