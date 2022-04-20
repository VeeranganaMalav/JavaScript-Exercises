/*This challenge requires you to change every letter in the string to the letter following it in the alphabet, so a becomes
b, z becomes a, etc. Once every letter is changed, we then need to capitalize only the vowels, namely: a, e, i, o, u.*/

function caesarCipher(str, offset){
    str = str.toLowerCase();
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedString = '';

    for(let i=0; i<str.length; i++){
        if( (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') ){
            let shiftedIndex = alphabets.indexOf(str.charAt(i)) + offset;

            if (shiftedIndex > 25){
                shiftedIndex -= 26;
            }

            if( (alphabets.charAt(shiftedIndex) == 'a') || (alphabets.charAt(shiftedIndex) == 'e') || (alphabets.charAt(shiftedIndex) == 'i')|| (alphabets.charAt(shiftedIndex) == 'o') || (alphabets.charAt(shiftedIndex) == 'u') ){
                encryptedString = encryptedString.concat(alphabets.charAt(shiftedIndex).toUpperCase());
            }
            else{
                encryptedString = encryptedString.concat(alphabets.charAt(shiftedIndex));
            }    
        }
        else{
            encryptedString = encryptedString.concat(str.charAt(i));
        }
    }

    return encryptedString;
}

// let string = prompt("Enter the string");
// let shift = prompt("Enter the number by which letters are to be shifted");
// console.log("Caesar Cipher for given string is " + caesarCipher(string, shift));
console.log("Caesar Cipher for given string is " + caesarCipher("Veerangana", 1));

