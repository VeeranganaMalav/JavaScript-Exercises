// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

function findMedianSortedArrays(nums1, nums2) {
    let mergedArray = nums1.concat(nums2).sort(function(a,b){
        return a-b;
    });
    let arrayLength = mergedArray.length;

    if(arrayLength%2 !== 0){     //array length is odd, then return (n/2)th element of array
        return mergedArray[Math.floor(arrayLength/2)];
    }
    else{       //array length is even, then return the sum of (n/2)th and (n/2)th element of array divided by 2
        return (mergedArray[(arrayLength/2)-1]+ mergedArray[(arrayLength/2)])/2;
    }
};

let arr1 = [3];
let arr2 = [-2,-1];

var result = findMedianSortedArrays(arr1, arr2);
console.log(result);