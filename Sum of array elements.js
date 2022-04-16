function sumOfArrayElements(arr){
    var sum = 0;
    
    for(let j=0; j<arr.length; j++){
        sum = sum + arr[j];
    }

    return sum;
}

console.log("Sum of array elements is " + sumOfArrayElements([1,2,3]) );


//Calculating sum of array elements using reduce() method
/* let array = [];
const numberOfElements = prompt("Enter the number of elements in the array");
for(let i=0; i<numberOfElements; i++){
    let element = prompt("Enter an element");
    array.push(element);
}

var total = array.reduce(function(a,b){
    return a+b;
},0); */

