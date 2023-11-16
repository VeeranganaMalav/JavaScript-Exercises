/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // let finalArray = [];

    // for(let i=0; i<nums.length; i++){
    //     let product = 1;
    //     for(let j=0; j<nums.length; j++){
    //         if(i === j){
    //             continue;
    //         }

    //         product *= nums[j];
    //     }

    //     finalArray.push(product);
    // }

    // return finalArray;
    




    let finalArray = [];

    for(let i=0; i<nums.length; i++){
        let product = nums[i];
        
        if(finalArray.length !== 0){
            product *= finalArray[i-1];
        }

        finalArray.push(product);
    }

    let product = 1;
    let i;

    for(i=nums.length-1; i>0; i--){
        finalArray[i] = finalArray[i-1]*product;
        product = nums[i]*product;
    }

    finalArray[i] = product;
    return finalArray;
};

const nums = [1,2,3,4];
console.log(productExceptSelf(nums));