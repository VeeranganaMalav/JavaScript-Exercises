// Given a string s consisting of words and spaces, return the length of the last word in the string.

function lengthOfLastWord(s){
    s = s.trim();

    console.log(s);
    let i = s.length-1;

    while(i > -1 && s[i] !== ' '){
        i--;
    }

    return s.length-1-i;
}

var result = lengthOfLastWord("   fly me   to   the moon  ");
console.log(result);