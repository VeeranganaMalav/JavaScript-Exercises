/*
Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.The passed in string will only consist of alphabetical characters and spaces(' ').
*/

function toWeirdCase(string){
    let str='';
    for(let i=0; i<string.length; i++){
        let character = (i%2 == 0) ? string.charAt(i).toUpperCase() :  string.charAt(i).toLowerCase();
        str = str.concat(character);
    }
    return str;
}

console.log(toWeirdCase("Weird Case String"));