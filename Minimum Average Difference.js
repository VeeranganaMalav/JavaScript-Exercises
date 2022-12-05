/* You are given a 0-indexed integer array 'nums' of length 'n'.

The average difference of the index 'i' is the absolute difference between the average of the first (i + 1) elements of nums and the average of the last (n - i - 1) elements. Both averages should be rounded down to the nearest integer.

Return the index with the minimum average difference. If there are multiple such indices, return the smallest one.

Note:

1. The absolute difference of two numbers is the absolute value of their difference.
2. The average of 'n' elements is the sum of the 'n' elements divided (integer division) by 'n'.
3. The average of 0 elements is considered to be 0. */


function minimumAverageDifference(nums){
    if(nums.length === 1){
        return 0;
    }

    let absoluteDifference = [];
    for(var i=0; i<nums.length; i++){
        let j=0;
        let firstSum = 0;
        while(j <= i){
            firstSum += nums[j];
            j++;
        }
        let firstAvg = Math.floor(firstSum/(i+1));

        let k=i+1;
        let secondSum = 0;
        while(k < nums.length){
            secondSum += nums[k];
            k++;
        }
        let secondAvg = 0;
        if((nums.length-i-1) === 0){
            secondAvg = 0;
        }
        else{
            secondAvg = Math.floor(secondSum/(nums.length-i-1));
        }

        absoluteDifference.push(Math.abs(firstAvg - secondAvg));
    }

    
    return absoluteDifference.indexOf(Math.min(...absoluteDifference));
    // console.log(absoluteDifference);
    
}

var index = minimumAverageDifference([0]);
console.log(index);