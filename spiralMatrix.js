// Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function(matrix) {
    let top = 0;
    let bottom = matrix.length-1;
    let right = matrix[0].length-1;
    let left = 0;

    let finalArray = [];

    while(top<=bottom && left <= right){
        for(let i=left; i<=right; i++){
            finalArray.push(matrix[top][i]);
        }
        top++;

        for(let i=top; i<=bottom; i++){
            finalArray.push(matrix[i][right]);
        }
        right--;

        if(top <= bottom){
            for(let i=right; i>=left; i--){
                finalArray.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if(left <= right){
            for(let i=bottom; i>=top; i--){
                finalArray.push(matrix[i][left]);
            }
            left++;
        }
    }

    // console.log(finalArray);

    return finalArray;
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));
// [1,2,3,6,9,8,7,4,5] -----> output
