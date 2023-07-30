/* Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes 'root1' and 'root2' are leaf-similar. */


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function leafSimilar(root1, root2){
    let leafSequence1 = [];
    let leafSequence2 = [];

    dfs(root1, leafSequence1);
    dfs(root2, leafSequence2);

    return (leafSequence1.length == leafSequence2.length && leafSequence1.every((v,i) => v === leafSequence2[i]))
}

function dfs(node, leaves){
    if(node != null){
        if (node.left == null && node.right == null) {
            leaves.push(node.val);
        }
        dfs(node.left, leaves);
        dfs(node.right, leaves);
    }
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

let arr1 = [3,5,1,6,2,9,8,null,null,7,4];
let arr2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8];

for(var i=0; i<arr1.length; i++){
    binaryTree(arr1[i]);
}
let root1 = tree;

tree = null;
q = [];
for(var i=0; i<arr2.length; i++){
    binaryTree(arr2[i]);
}
let root2 = tree;

var areSimilar = leafSimilar(root1, root2);
console.log(areSimilar);