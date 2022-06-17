/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity. */

function searchInsert(nums, target){
    for(let i=0; i<nums.length; i++){
        if(target === nums[i]){
            return i;
        }
        else{
            if(target<nums[i] && i===0){
                return 0;
            }
             
            if( (target>nums[i] && i===nums.length-1) || (target>nums[i] && target<nums[i+1]) ){
                return i+1;
            }
        }
    }
}

var result = searchInsert([1,3,5,6], 2);
console.log(result);