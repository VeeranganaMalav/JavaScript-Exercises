/* Given an integer array nums, find the subarray(A subarray is a contiguous non-empty sequence of elements within an array) with the largest sum, and return its sum. */

var maxSubArray = function(nums) {
    // let maxSum = -Infinity;

    // for(let i=0; i<nums.length; i++){
    //     let sum = 0;

    //     for(let j=i; j<nums.length; j++){
    //         sum += nums[j];

    //         if(sum > maxSum){
    //             maxSum = sum;
    //         }
    //     }

    // }

    // console.log(maxSum);
    // return maxSum;





    let maxSum = -Infinity;
    let sum = 0;

    for(let i=0; i<nums.length; i++){
        sum += nums[i];

        if(sum > maxSum){
            maxSum = sum;
        }

        if(sum < 0){
            sum = 0;
        }

    }

    console.log(maxSum);
    return maxSum;
};


const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));