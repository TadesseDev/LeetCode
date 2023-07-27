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
    let count=0
    function countGoodNodes(node, max){
        if(!node)
            return 
        if(node.val>=max){
            count+=1
            max=node.val
        }
        countGoodNodes(node.left, max)
        countGoodNodes(node.right, max)
    }
    countGoodNodes(root, root.val-1)
    return count
};