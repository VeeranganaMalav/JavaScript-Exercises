/* Given the 'root' of a binary tree and an integer 'targetSum', return true if the tree has a root-to-leaf path such that adding up all the values along the path equals 'targetSum'. */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function hasPathSum(root, targetSum){
    if(!root){
        return false;
    }
    if(!root.left && !root.right && root.val === targetSum){
        return true;
    }
    
    return (hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val));
}

let tree = null;
let q = [];

function binaryTree(value){
    let node = new TreeNode(value);

    if(tree === null){
        tree = node;
    }
    else if (q[0].left === null){
        q[0].left = node;
    }
    else
    {
        q[0].right = node;
        q.shift();
    }
    q.push(node);
}

let l = [5,4,8,11,null,13,4,7,2,null,null,null,1];
for(var i=0; i<l.length; i++){
    binaryTree(l[i]);
}
console.log(tree);

var result = hasPathSum(tree, 22);
console.log(result);