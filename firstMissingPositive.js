/* Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space. */

var firstMissingPositive = function(nums) {
    let missing = 1;

    nums.sort((a, b) => a-b);
    console.log(nums);

    for(let i=0; i<nums.length; i++){
        if(missing == nums[i]){
            missing++;
        }
        else{
            continue;
        }
    }

    return missing;
};


const nums = [1,2,0];
console.timeLog(firstMissingPositive(nums));