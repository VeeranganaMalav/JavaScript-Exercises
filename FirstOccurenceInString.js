/* Given two strings 'needle' and 'haystack', return the index of the first occurrence of 'needle' in 'haystack', or -1 if 'needle' is not part of 'haystack'. */

function strStr(haystack, needle){
    let indexOfNeedle = -1;

    indexOfNeedle = haystack.indexOf(needle);
    return indexOfNeedle;
}

var result = strStr("leetcode", "leeto");
console.log(result);

result = strStr("sadbutsad", "sad");
console.log(result);


/* function strStr(haystack, needle) {
    let haystackPointer;
  
    for (let i=0; i<haystack.length; i++) {
        haystackPointer = i;
        needlePointer = 0;
    
        while (
            haystackPointer < haystack.length &&
            needlePointer < needle.length &&
            haystack[haystackPointer] === needle[needlePointer]
        ){
            haystackPointer++;
            needlePointer++;
        }
    
        if (needlePointer === needle.length) {
            return haystackPointer - needle.length;
        }
    }
  
    return -1;
}; */