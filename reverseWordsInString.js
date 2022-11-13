/* Given an input string 's', reverse the order of the words.

Return a string of the words in reverse order concatenated by a single space.

Note that 's' may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces. */

function reverseWords(s){

    //remove leading, trailing spaces and multiple spaces between words
    let words = s.trim().split(/\s+/);
    
    let arrayLength = words.length;
    for(var i=0; i<arrayLength/2 ; i++){
        let temp = words[i];
        words[i] = words[arrayLength - (i+1)];
        words[arrayLength - (i+1)] = temp;
    }
    
    return words.join(' ');
}

var result = reverseWords("a good   example");
console.log(result);