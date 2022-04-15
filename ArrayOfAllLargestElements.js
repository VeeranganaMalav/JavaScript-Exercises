function arrayOfAllLargest(arr){

    let largestArray = [];

    for(let i=0; i<arr.length; i++){
        let largestNumInArr = arr[i][0];

        for(let j=1; j<arr[i].length; j++){

            if(largestNumInArr < arr[i][j]){
                largestNumInArr = arr[i][j];
            }
        }

        largestArray.push(largestNumInArr);
    }

    return largestArray;
}

console.log("Array of all largest elements in each array: " + arrayOfAllLargest([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );

/* let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];

const numberOfElements = prompt("Enter the number of elements");

for(let i=1; i<=numberOfElements; i++){
    arr1.push(prompt("Enter element in arr1"));
    arr2.push(prompt("Enter element in arr2"));
    arr3.push(prompt("Enter element in arr3"));
    arr4.push(prompt("Enter element in arr4"));
}

console.log("Array of all largest elements in each array : " + arrayOfAllLargest([arr1, arr2, arr3, arr4]) ); */