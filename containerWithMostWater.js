/* You are given an integer array 'height' of length 'n'. There are 'n' vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store. */

function maxArea(height){
    let maximumArea = 0;

    let left = 0;
    let right = height.length-1;

    while(left < right){
        let area = (right-left)*(Math.min(height[left], height[right]));

        maximumArea = Math.max(area, maximumArea);

        if(height[left] > height[right]){
            right--;
        }
        else{
            left++;
        }
    }

    return maximumArea;
};

const height = [1,8,6,2,5,4,8,3,7];
let containerWithMostWater = maxArea(height);

console.log(containerWithMostWater);
