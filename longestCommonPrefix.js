/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

function longestCommonPrefix(strs){
    let shortestWord = '';
    for(let word of strs){
        if(!word){
            return '';
        }

        if(!shortestWord){
            shortestWord = word;
        }
        else if(shortestWord.length > word.length){
            shortestWord = word;
        }
    }

    let commonPrefix = '';
    let i=0;
    while(i < shortestWord.length){
        let character = shortestWord[i];

        for(let word of strs){
            if(character !== word[i]){
                return commonPrefix;
            }
        }
        commonPrefix += character;
        i++;
    }

    return commonPrefix;
}

var result = longestCommonPrefix(["dog","racecar","car"]);
console.log(result);