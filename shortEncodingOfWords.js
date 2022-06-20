/* A valid encoding of an array of 'words' is any reference string 's' and array of indices 'indices' such that:

1. words.length == indices.length
2. The reference string 's' ends with the '#' character.
3. For each index 'indices[i]', the substring of 's' starting from 'indices[i]' and up to (but not including) the next '#' character is equal to 'words[i]'.
Given an array of 'words', return the length of the shortest reference string 's' possible of any valid encoding of words. */

function minimumLengthEncoding(words){
    let set = new Set(words);
    for(let word of words){
        for(let k=1; k<word.length; k++){
            let substring = word.slice(k);      //combination of letters that can be present in the set
            set.delete(substring);      //delete if this substring isa a word in the set
        }
    }
    
    let newStringLength = 0;
    for(let word of set){
        newStringLength += word.length + 1;
    }

    return newStringLength;
}

var result = minimumLengthEncoding(["time", "me", "bell"]);
console.log(result);