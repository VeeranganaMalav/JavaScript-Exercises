/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */

function threeSum(nums){
    let tripletArray = [];
    if(nums.length >= 3){
        let map = {};
        for(let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++ ){
                for(let k=j+1; k<nums.length; k++){
                    if( (nums[i] + nums[j] + nums[k] === 0) && (i !== j) && (j !== k) && (i !== k) && 
                    (!map[[nums[i],nums[j],nums[k]].sort()]) ){
                        tripletArray.push([nums[i],nums[j],nums[k]].sort());
                        // tripletArray[tripletArray.length-1].sort();
                        map[[nums[i],nums[j],nums[k]].sort()]= true;
                    }
                }
            } 
        }
    }
    
    return tripletArray;
}

let arr = [-1,0,1,2,-1,-4];
var result = threeSum(arr);
console.log(result);