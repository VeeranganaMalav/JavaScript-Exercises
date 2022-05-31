// Given a string s, find the length of the longest substring without repeating characters.


function lengthOfLongestSubstring(s) {

    let index = 0, positionOfCharacter = 0;
    let visited = new Map();
    let maxLength = 0;

    while (index < s.length) {
        const charAtIndex = s.charCodeAt(index);

        if (visited.has(charAtIndex)) {
            positionOfCharacter = Math.max(visited.get(charAtIndex), positionOfCharacter);
        }

        maxLength = Math.max(maxLength, index - positionOfCharacter + 1);
        index++;
        visited.set(charAtIndex,index);
        console.log(visited);
    }
    return maxLength;
};

var result = lengthOfLongestSubstring("abcabcbb");
console.log(result);

