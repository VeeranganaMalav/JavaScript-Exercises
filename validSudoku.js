/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules. */

function isValidSudoku(board){
    //check each row
    for(let i=0; i<9; i++) {
        if(!validate(board[i])){
            return false;
        }
    }

    //check each col
    for(let i=0; i<9; i++) {
        let arr = [];
        for(let j=0; j<9; j++) {
            arr.push(board[j][i]);
        }
        if(!validate(arr)){
            return false;
        }
    }

    //check each 3*3
    let row = [[0,1,2], [3,4,5], [6,7,8]]
    let col = [[0,1,2], [3,4,5], [6,7,8]]
    for(let i of row) {
        for(let j of col) {
            let arr = [];
            for(let num1 of i) {
                for(let num2 of j){
                    arr.push(board[num1][num2]);
                }
            }
            if(!validate(arr)){
                return false;
            }
        }
    }
    return true;
}

function validate(arr) {
	//just checks in an array if it contains duplicates
    let set1 = new Set();
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === '.'){
            continue;
        }
        if(set1.has(arr[i])){
            return false;
        }
        set1.add(arr[i]);
    }
    return true;
}

var isValid = isValidSudoku(
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
);
console.log(isValid);