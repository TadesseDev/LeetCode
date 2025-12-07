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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    /*
    - let counter=0
    - recursive from root node, pass all parents
        - if(!node)
            return
        - start summing
            sum=current node.val 
            from end to the beginnig, add the current element and see if target sum is found at any point
                - if found, increment count and keep cecking till we hit the first node 
        - call next function by pushing the current node.val to the parents list.
    return counter;
    */

    let counter=0;

    function findTarget(node, parents){
        if(!node)
            return
        let sum=0
        parents.push(node.val)
        let i=parents.length-1
        do{
            sum+=parents[i]||0;
            if(sum==targetSum)
                counter++;
            i--;
        }while(i>=0)

        findTarget(node.left, [...parents])
        findTarget(node.right, [...parents])
    }
    findTarget(root, [])
    return counter
};