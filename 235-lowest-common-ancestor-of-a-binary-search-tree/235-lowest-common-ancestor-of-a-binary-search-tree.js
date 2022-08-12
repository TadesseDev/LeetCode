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
    let large=p.val>q.val?p.val:q.val;
    let small=p.val<q.val?p.val:q.val;
    console.log(large,small)
    if(!root)
        return root
    if(root.val==p.val||root.val==q.val)
        return root
    else if(root.val>small&&root.val<large){
        if(large<root.val&&root.left.val>small&&root.left.val<large)
            return  lowestCommonAncestor(root.left, p, q)
        else if(small>root.val&&root.right.val>small&&root.right.val<large)
            return  lowestCommonAncestor(root.right, p, q)
        else 
                return root
    }
    else if(root.val>large)
        return  lowestCommonAncestor(root.left, p, q)
    else 
        return  lowestCommonAncestor(root.right, p, q)
};
