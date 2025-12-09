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
    /*
    - recursive iteration
    - iterate both left and right 
    - if node is null/result is set, return 
    - on return check if current node matches p or q
    - if match p return 'p'
    - if node match q return 'q'
    - if p and q returns/node matches the remaining type 
        - set result;
    return result


    3: 'P' 'Q'
    */
let result=null;
    function findCLA(node){
        if(!node || result)
            return null;
        let left=findCLA(node.left)
        let right=findCLA(node.right)

        let P = left=='P' || right == "P" || node.val == p.val ? "P" : null;
        let Q = left=='Q' || right == "Q" || node.val == q.val ? "Q" :null;
        // console.log(P,Q,result, p, q)

        if(P&&Q)
            result=node
        return P || Q || null
    }

    findCLA(root)

    return result
};