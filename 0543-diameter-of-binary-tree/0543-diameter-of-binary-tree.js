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
    let diameter=0
        function findDepth(node){
        if(!node)
            return -1
        let lc=findDepth(node.left)+1
        let rc=findDepth(node.right)+1
        if(lc+rc>diameter)
            diameter=lc+rc
        let height= Math.max(lc,rc)
        return height
    }
    findDepth(root)
return diameter
}; 