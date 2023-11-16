// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order

var generateMatrix = function(n) {
    let matrix = new Array(n);

    for(let i=0; i<n; i++){
        matrix[i] = new Array(n).fill(0);
    }


    let left = 0;
    let top = 0;
    let right = n-1;
    let bottom = n-1;
    let num = 1;

    while(top <= bottom && left <= right){
        for(let i=left; i<=right; i++){
            matrix[top][i] = num;
            num++;
        }
        top++;

        for(let i=top; i<=bottom; i++){
            matrix[i][right] = num;
            num++;
        }
        right--;

        for(let i=right; i>=left; i--){
            matrix[bottom][i] = num;
            num++;
        }
        bottom--;

        for(let i=bottom; i>=top; i--){
            matrix[i][left] = num;
            num++;
        }
        left++;
    }

    console.log(matrix);
    return matrix;
};

const n = 3;
console.log(generateMatrix(n));

//[[1,2,3],[8,9,4],[7,6,5]] -------> output