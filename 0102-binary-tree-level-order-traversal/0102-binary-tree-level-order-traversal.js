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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result=[]
    if(!root)
        return result
    function traverse(nodes){
        if(!nodes.length)
            return
        result.push(nodes.map(node=>node.val))
        let next=[]
        nodes.forEach(node=>{
            if(node.left)
                next.push(node.left)
            if(node.right)
                next.push(node.right)
        })
        traverse(next)
    }
    traverse([root])
    return result 
};