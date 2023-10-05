// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 2:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

const board1 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
// output is true

const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
// output is false

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //Checking the rows
    for(let i = 0; i < 9; i++){
        //Creating a set to store the numbers we encounter in this row
        const newSet = new Set();
        for(let j = 0; j < 9; j++){
            //Current values of the board
            const spot = board[i][j];
            //If the spot is not empty
            if(spot !== '.' && newSet.has(spot)){
                //Check if the values are already in the Set, if they are, return false
                return false;
            } else {
                //Otherwise add to the set
                newSet.add(spot);
            }
        }
    }

    //Checking the columns
    for(let i = 0; i < 9; i++){
        //Creating a set to store the numbers we encounter in this column
        const newSet = new Set();
        for(let j = 0; j < 9; j++){
            //Current values of the board
            const spot = board[j][i];
            //If the spot is not empty
            if(spot !== '.' && newSet.has(spot)){
                //Check if the values are already in the Set, if they are, return false
                return false;
            } else {
                //Otherwise add to the set
                newSet.add(spot);
            }
        }
    }
    //Check the subBoxes
    for(let i = 0; i < 9; i += 3){
        for(let j = 0; j < 9; j += 3) {
            const newSet = new Set();
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    const spot = board[x][y]
                    if (spot !== '.' && newSet.has(spot)){
                        //Check if the values are already in the Set, if they are, return false
                        return false;
                    } else {
                        //Otherwise add to the set
                        newSet.add(spot);
                    }
                }
            }
        }
        //Creating a set to store the numbers we encounter in this subBox
        //Find the starting index of the subBox in the row
        //Find the starting index of the subBox in the column
    }
    return true;
};

console.log("case 1");
console.log(isValidSudoku(board1));
console.log("case 2");
console.log(isValidSudoku(board2));