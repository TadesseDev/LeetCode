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
 * @return {number}
 */
var longestZigZag = function(root) {
  /*
    - max = 0
    - if node is null; 
        - return [0,0]
    - left length = node.right[1] 
    - right length = node.left[0]
    - if left or right are larger than max
        max=newmax
    - return [left+1, right+1]
    - return max 

max=2
right 2
left  1
    1: [1,1]
    1: [2, 1]
    1: [2, 1]
    1: [2, 1]
    1: [3, 1]
    1: [2, 3]
  */  
max=0;
  function zigzag(node){
    if(!node)
        return [0,0]
    
    let left = zigzag(node.right)[1]
    let right = zigzag(node.left)[0]

    max = Math.max(left, right, max)
    return [left+1, right+1]
  }


     let rest = zigzag(root)

    //  if(res[0]>max || res[1]>max)
    //     return Math
  return max;
};