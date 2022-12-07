/* Given the 'root' node of a binary search tree and two integers 'low' and 'high', return the sum of values of all nodes with a value in the inclusive range [low, high]. */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

let sum;
function rangeSumBST(root, low, high){
    sum = 0;
    dfs(root, low, high);
    return sum;
}

function dfs(root, low, high) {
    if (root != null) {
        if (low <= root.val && root.val <= high){
            sum += root.val;
        }
        if (low < root.val){
            dfs(root.left, low, high);
        }
        if (root.val < high){
            dfs(root.right, low, high);
        }
    }
}


function binarySearchTree(sortedArr, start, end){
    if(start > end){
        return null;
    }

    let mid = Math.floor((start + end)/2);

    let node = new TreeNode(sortedArr[mid]);
    node.left = binarySearchTree(sortedArr, start, mid-1);
    node.right = binarySearchTree(sortedArr, mid+1, end);

    return node;
}

let arr = [10,5,15,3,7,13,18,1,null,6];
let sortedArray = arr.sort((a, b) => {
    return a - b;
});
console.log(sortedArray);

let bst = binarySearchTree(sortedArray, 0, sortedArray.length-1);
console.log(bst);

var sumOfNodes = rangeSumBST(bst, 6, 10);
console.log(sumOfNodes);