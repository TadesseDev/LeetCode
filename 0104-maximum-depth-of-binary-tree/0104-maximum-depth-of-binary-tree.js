/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    /*
    - get the depth from left and + 1
    - get the depth from right and + 1
    - return max of the two 
    */
    if(!root)
        return 0
    let right = maxDepth(root.right) + 1;
    let left = maxDepth(root.left) + 1;

    console.log(root?.val, left, right)
    return left > right ? left : right ;
};
/*
3 1 1
5 1 1
5 1 2
6 1 1
9 1 2
15 1 1
7 1 1
20 1 2
3 1 3
*/