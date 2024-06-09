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
    const result=[]
    if(!root)
        return result
    const stack=[root]
    while(stack.length){
        const current=stack.pop()
        if(current.right){
            stack.push(current.right)
            current.right=null
        }
        
        if(current.left){
            stack.push(current)
            stack.push(current.left)
            current.left=null
        }else {
            result.push(current.val)
        }
    }
    return result
};