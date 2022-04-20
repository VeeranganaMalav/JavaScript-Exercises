function reverseString(str){
    let reversedString = "";

    for(let i=str.length-1; i>=0; i--){
        reversedString = reversedString.concat(str.charAt(i));
    }

    return reversedString;
}

console.log(reverseString("Hello! Veerangana"));