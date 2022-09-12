/* Given an array of integers 'nums' sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity. */


//BINARY SEARCH - TIME COMPLEXITY  O(log n)
function searchRange(nums, target){
    let position = [-1, -1];

    if(nums.length === 0){
        return position;
    }

    position[0] = binarySearchLeft(nums, target);
    position[1] = binarySearchRight(nums, target);
    
    return position;
}

function binarySearchLeft(nums, target){
    if(nums[nums.length - 1] < target){
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let mid = left + Math.floor((right-left)/2);
        if (nums[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }

    return nums[left] === target ? left : -1;
}

function binarySearchRight(nums, target){
    if(nums[0] > target){
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let mid = left + Math.floor((right-left+1)/2);
        if (nums[mid] > target){
            right = mid - 1;
        }
        else{
            left = mid;
        }
    }

    return nums[left] === target ? left : -1;
}

var result = searchRange([5,7,7,8,8,10], 8);
console.log(result);


//NAIVE APPROACH
function searchRange(nums, target) {
    let position = [-1, -1];
    
    for(var i=0; i<nums.length; i++){
        if(nums[i] === target){
            position[0] = i;
            break;
        }
    }
    for(var j=nums.length-1; j>=0; j--){
        if(nums[j] === target){
            position[1] = j;
            break;
        }
    }

    return position;
}