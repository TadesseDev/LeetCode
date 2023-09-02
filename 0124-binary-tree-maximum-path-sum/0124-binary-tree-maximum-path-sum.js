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
var maxPathSum = function(root) {
    let max=-1000
    function checkPath(head){
        if(!head)
            return 0
        let left=checkPath(head.left)
        let right=checkPath(head.right)
        if(left+right+head.val > max)
            max=left+right+head.val
        if(head.val>max)
            max=head.val
        let ret=Math.max(left,right) + head.val
        if(ret>max)
            max=ret
        return ret > head.val ? ret : head.val
    }
    checkPath(root)
    return max
};