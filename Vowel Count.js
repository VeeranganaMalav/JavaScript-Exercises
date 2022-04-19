/* Create the function vowelCount that takes a string parameter and returns the number of vowels the string contains. */

function vowelCount(str){

    const count = str.match(/[aeiou]/gi).length;
    return count;

}

console.log(vowelCount("Good Job"));
console.log(vowelCount("Yankees"));
