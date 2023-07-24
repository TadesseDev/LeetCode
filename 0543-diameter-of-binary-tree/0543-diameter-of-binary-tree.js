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

var diameterOfBinaryTree = function(root) {
    let sum=0
        function findDepth(node){
        if(!node)
            return -1
        let lc=findDepth(node.left)+1
        let rc=findDepth(node.right)+1
        if(lc+rc>sum)
            sum=lc+rc
        return Math.max(lc,rc)
    }
    findDepth(root)
return sum
}; 