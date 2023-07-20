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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)
        return null
    
    let temp=root.right
    root.right=root.left
    root.left=temp
    
    if(root.left)
        invertTree(root.left)
    if(root.right)
        invertTree(root.right)
    
    return root
};