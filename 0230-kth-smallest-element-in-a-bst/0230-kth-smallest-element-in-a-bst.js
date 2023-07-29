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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result=false
    function inorderTraverse(root, s){
        if(!root||result)
            return s
        let left=inorderTraverse(root.left, s)

        if(left+1==k)
            result=root.val
        let right=inorderTraverse(root.right, left+1)
        return right
    }
    inorderTraverse(root, 0)
    return result
};