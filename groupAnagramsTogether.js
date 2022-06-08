/* Given an array of strings 'strs', group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

function groupAnagrams(strs){
    let anagrams = {};

    for(let word of strs){
        let sortedWord = word.split('').sort().join('');
        
        if(! anagrams[sortedWord]){
            anagrams[sortedWord] = [word];
        }
        else{
            anagrams[sortedWord].push(word);
        }
    }

    return Object.values(anagrams);
}

var result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(result);