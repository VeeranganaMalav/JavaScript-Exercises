/* Given an 'm x n' grid of characters board and a string 'word', return true if 'word' exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once. */

function exist(board, word){
    let result = false;

    var check = function(x, y, index) {
        if (!result) {
            if (x < 0 || y < 0 || x >= board.length || y >= board[0].length){     // out of boundary
                return;
            }
            if (board[x][y] != word[index]){     // wrong character
                return;
            }
            if (index == word.length - 1){     // got to the end means we found a correct path
                result = true;
                return;
            }

            board[x][y] = "*";     // mark as visited
			// check all directions
            check(x+1, y, index+1);
            check(x-1, y, index+1);
            check(x, y+1, index+1);
            check(x, y-1, index+1);

            board[x][y] = word[index];      // reset the board
        }
    }

    for (let i=0; i<board.length; i++){
        for (let j=0; j<board[0].length; j++){
            if (board[i][j] == word[0]) {
                check(i, j, 0);
                if (result){
                    return result;
                }
            }
        }
    }
    
    return result;
}

var isPresent = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE");
console.log(isPresent);