/* Given an integer array 'nums', return true if any value appears at least twice in the array, and return false if every element is distinct. */

var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] === nums[i]){
                return true;
            }
        }
    }

    return false;
};

const nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));