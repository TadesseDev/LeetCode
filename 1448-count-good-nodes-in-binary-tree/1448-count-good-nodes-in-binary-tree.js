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
var goodNodes = function(root) {
    /*
    - set good node as []
    - call recursive functionwith root, and max=root.val-1
    - recursively 
        - if node.val>=passed max val
            add node to good nodes
            max=node.val
        - iterate to left and right.
    return max
    */

    let good=0;
    function findGoodOnes(node, max){
        if(!node)
            return;
        if(node.val>=max){
            good++;
            max=node.val;
        }
        findGoodOnes(node.right, max)
        findGoodOnes(node.left, max)
    }
    findGoodOnes(root, root.val-1)
    return good;
};