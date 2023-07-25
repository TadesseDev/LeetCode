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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // check if they are the same 
    function isEqual(container, subContainer){
        if(container==subContainer)
            return true
        if((!container==!!subContainer||!!container==!subContainer) || container.val!=subContainer.val)
            return false
        let res=isEqual(container.left, subContainer.left)
        if(!res)
            return false
        res=isEqual(container.right, subContainer.right)
        if(!res)
            return false
        return true
    }
    // finde if the root of the subRoot tree is in the root node
    function findRoot(container, subContainer){
        if(!container)
            return false
        if(container.val==subContainer.val){
            if(isEqual(container, subContainer))
                return true
        }
        let res=findRoot(container.left, subContainer)
        if(res)
            return res
        
        res=findRoot(container.right, subContainer) 
        if(res)
            return res
        return false
    }
    
    return findRoot(root, subRoot)
};