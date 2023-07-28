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
var isValidBST = function(root) {
    // if left is null fill the left array with the root and skip checking 
    // if right is null, fill the node with the root and skip checking 
    // check the max node is less thatn the root on the left side 
    // check the min value is greater than the node on the right side 
    let result=true
    function validBST(root){
        
        if(!root||!result)
            return null
        console.log(root.val)
        let left=validBST(root.left)
        let right=validBST(root.right)
        if(result){
            if(left&&left[1]>=root.val){
                    result=false
                    return
            }
            if(right&&right[0]<=root.val){
                    result=false
                    return
            }
            
            return [left?left[0]:root.val, right?right[1]:root.val]
        } 
        return
    }
    validBST(root)
    return result;
};