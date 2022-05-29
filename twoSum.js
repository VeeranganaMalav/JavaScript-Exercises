/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. */

function twoSum(nums, target){
    let result = new Set();
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if((nums[i] + nums[j]) == target){
                result.add(i);
                result.add(j);
            }
        }
    }

    return Array.from(result);
}

let arr = [2,3,4];
let targetNum = 6
var answer = twoSum(arr, targetNum);

console.log(answer);