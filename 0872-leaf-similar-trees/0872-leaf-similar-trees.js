/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    /*
    - prepare restul1 1 and 2 as empty array;
    - prepare store 1 and 2
    - run separate look till store 1 and two is empty 
        - if element has left
            - push left to en of store
        - if element has right, 
            - push to the end of store 
        - if store does not have left and right, 
            - only push it to the result
    - in the secod store, follow the same step, 
        - but on each push to the result, check if the element is the sma as the one in its relative
            if not return false 
    - return true
    */

    const result1=[];
    const result2=[];

    const stack1=[root1];
    const stack2=[root2];

    while(stack1.length){
        ele=stack1.shift();
        if(ele.right)
            stack1.unshift(ele.right)
        if(ele.left)
            stack1.unshift(ele.left)
        if(!ele.left&&!ele.right)
            result1.push(ele.val)
    }
// console.log(result1)
    while(stack2.length){
        ele=stack2.shift();
        if(ele.right)
            stack2.unshift(ele.right)
        if(ele.left)
            stack2.unshift(ele.left)
        if(!ele.left&&!ele.right){
            result2.push(ele.val)
// console.log(result2)
        if(result1[result2.length-1]!=ele.val)
            return false
        }
    }
    return result1.length==result2.length
};