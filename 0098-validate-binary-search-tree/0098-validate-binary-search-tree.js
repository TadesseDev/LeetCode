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
            if(left){
                if(left[1]>=root.val){
                    result=false
                    return
                }
            }else{
                left=[root.val, root.val]
            }
            if(right){
                if(right[0]<=root.val){
                    result=false
                    return
                }
            }else{
                right=[root.val, root.val]
            }
            
            return [left[0], right[1]]
        }
        return
    }
    validBST(root)
    return result;
};