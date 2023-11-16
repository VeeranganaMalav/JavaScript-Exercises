/* Given an integer array nums, find a subarray(A subarray is a contiguous non-empty sequence of elements within an array) that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer. */

var maxProduct = function(nums) {
    let product = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];

    for(let i=1; i<nums.length; i++){
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        currentMax = Math.max(nums[i]*prevMax, nums[i], nums[i]*prevMin);
        currentMin = Math.min(nums[i]*prevMin, nums[i], nums[i]*prevMax);

        prevMax = currentMax;
        prevMin = currentMin;

        product = Math.max(currentMax, product);
    }

    return product;
};

const nums = [2,3,-2,4];
console.log(maxProduct(nums));