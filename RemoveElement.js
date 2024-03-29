/* Given an integer array 'nums' and an integer 'val', remove all occurrences of 'val' in 'nums' in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array 'nums'. More formally, if there are 'k' elements after removing the duplicates, then the first 'k' elements of nums should hold the final result. It does not matter what you leave beyond the first 'k' elements.

Return 'k' after placing the final result in the first 'k' slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. */

function removeElement(nums, val){
    let removedElement = 0;
    for(var i=0; i<nums.length; i++){
        if(nums[i] === val){
            removedElement++;
            nums[i] = -1;
        }
    }
    
    nums.sort((a, b) => b-a);
    return (nums.length - removedElement);
}

var result = removeElement([0,1,2,2,3,0,4,2], 2);
console.log(result);

/* function removeElement(nums, val) {
    let pos = 0;    // where valid value should be put 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) // valid value, i.e. not a duplicate
            nums[pos++] = nums[i];
    }
    return pos;
}; */