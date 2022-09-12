/* Given an integer array 'nums', return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */

function threeSum(nums){
    let finalArray = [];

    nums.sort((a,b) => a-b);
    
    for (let i=0; i<nums.length; i++) {
        if (i>0 && nums[i] === nums[i-1]){
            continue;
        }
        findPairs(nums, -nums[i], i+1, nums.length-1, finalArray);
    }

    return finalArray;
}

function findPairs(nums, remainingSum, left, right, finalArray){
    while(left<right){
        let currentSum = nums[left] + nums[right];
        
        if (currentSum === remainingSum){ // pairs found
            finalArray.push([-remainingSum, nums[left], nums[right]]);
            left++;
            right--;
            
            while ( left<right && nums[left] === nums[left - 1]){
                left += 1; 
            }
            while (left<right && nums[right] === nums[right + 1]){
                right -= 1;
            }
        } 
        else if (currentSum > remainingSum){
            right--;
        }
        else {
            left++;
        }
    }
}

var result = threeSum([-1,0,1,2,-1,-4]);
console.log(result);