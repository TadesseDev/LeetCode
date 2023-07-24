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
 * @return {boolean}
 */
var isBalanced = function(root) {

    function recurse(root){
            if(!root)
        return -1
    let lc=recurse(root.left)
    let rc=recurse(root.right)
    if(lc===false||rc===false)
        return false
    if(Math.abs(lc-rc)>1)
        return false
    return Math.max(lc, rc)+1
    }
    let res = recurse(root) 
    return !!res || res===0
    
};