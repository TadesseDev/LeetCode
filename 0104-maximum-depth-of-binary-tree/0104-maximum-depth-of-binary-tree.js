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
var maxDepth = function(root) {
    let count=0
    function iterator(root, num){
        num+=1
        if(!root.left&&!root.right){
            if(num>count)
                count=num
        }
        if(root.left)
            iterator(root.left, num)
        if(root.right)
            iterator(root.right, num)
    }
    if(root)
        iterator(root, 0)
    return count;
};