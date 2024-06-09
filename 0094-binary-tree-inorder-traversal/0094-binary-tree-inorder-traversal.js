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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const vals = []
    if(!root)
        return vals
    if(root.left)
        vals.push(...inorderTraversal(root.left))
    // console.log(root.val)
    vals.push(root.val)
    if(root.right)
        vals.push(...inorderTraversal(root.right))
    return vals
};