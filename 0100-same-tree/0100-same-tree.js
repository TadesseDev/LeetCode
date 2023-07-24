/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===q) // both are null
        return true
    if((!q==!!p||!p==!!q)||(p.val!=q.val)) // one is null or the value is different 
       return false;
       
   let res1=isSameTree(p.left, q.left)
   if(!res1)
       return false
   let res2=isSameTree(p.right, q.right)
   if(!res2)
       return false
   return true
};