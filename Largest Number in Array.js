function largestNumberInArray(arr){
    let max = Number.MIN_SAFE_INTEGER;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

const numberOfElemets = prompt("Enter the number of elements for array");
let arr = [];

for(let i=0; i<numberOfElemets; i++){
    let element = prompt("Enter an element");
    arr.push(element);
}

console.log("Largest number in the array is " + largestNumberInArray(arr));