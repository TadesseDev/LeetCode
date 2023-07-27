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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result=[]
    if(!root)
        return result
    function findRSV(nodes){
        if(!nodes.length)
            return 
        result.push(nodes[nodes.length-1].val)
        let next=[]
        nodes.forEach(node=>{
            if(node.left)
                next.push(node.left)
            if(node.right)
                next.push(node.right)
        })
        findRSV(next)
    }
    findRSV([root])
    return result;
};