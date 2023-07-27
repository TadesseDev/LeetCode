/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    
    // if right return and left return a different found 
    // if one is found and root is a match 
    let parent=null
    function findLCA(root){
        if(parent || !root)
            return null
        let left=findLCA(root.left)
        let right=findLCA(root.right)
        if(right&&left){
            parent=root
            return
        }
        else if(right||left){
            if(root.val==p.val || root.val==q.val){
                parent=root
                return 
            }
            return right || left
        }else if(root.val==p.val || root.val==q.val){
            return root
        }
    return null
    }
    findLCA(root)
    return parent 
};