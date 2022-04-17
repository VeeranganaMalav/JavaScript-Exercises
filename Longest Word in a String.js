function longestWordInString(str){
    let wordArray = str.split(' ').map(function(word){
        return word.replace(/[^a-zA-Z0-9]/g, '')
    });

    let longestWord = wordArray[0];
    for(let i=1; i<wordArray.length; i++) {
        if (longestWord.length < wordArray[i].length) {
            longestWord = wordArray[i];
        }
    }

    return longestWord;

}

console.log("Longest word in the string is " + longestWordInString("Hello Veerangana!"));