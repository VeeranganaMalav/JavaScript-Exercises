function isArrayUniform(arr){
    let sortedArray = arr.sort();

    if(sortedArray[0] != sortedArray[arr.length-1]){
        return false;
    }

    return true;
}

// naive approach
/* function isArrayUniform(arr){
    let firstElement = arr[0];

    for(let i=1; i<arr.length; i++){
        if(firstElement != arr[i]){
            return false;
        }
    }

    return true;
} */

console.log("Array is uniform or not : " + isArrayUniform([1, 1, 1, 1]));
console.log("Array is uniform or not :" + isArrayUniform([1, 2, 3, 1]));
