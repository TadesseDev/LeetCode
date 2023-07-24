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
        return true
    let lc=recurse(root.left)
    if(lc===false)
        return false;
    let rc=recurse(root.right)
    if(rc===false)
        return false
    if(lc===true)
        lc=-1
    if(rc===true)
        rc=-1
    if(Math.abs(lc-rc)>1){
        console.log("falling here")
        return false
    }
    return Math.max(lc, rc)+1
    }
    let res = recurse(root) 
    return !!res || res===0
    
};