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
    /*
    - start quee[root]
    - result []
    - while quee.length>0
        result.push(quue last element);
        - temp =[];
        - while(quee.length)
            node = quee.shift()
            push left and right of the node to temp
        quee = temp
    */

    let quee = root ? [root] : [];
    let result = [];
    while(quee.length){
        result.push(quee[quee.length-1].val)
        let temp = []
        while(quee.length){
            let node=quee.shift()
            node.left && temp.push(node.left)
            node.right && temp.push(node.right)
        }
    quee=temp;
    }
    return result;
};
