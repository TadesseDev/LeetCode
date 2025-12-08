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
// max=0;
//   function zigzag(node){
//     if(!node)
//         return [0,0]
    
//     let right = zigzag(node.right)[1]
//     let left = zigzag(node.left)[0]

//     max = Math.max(left, right, max)
//     return [right+1, left+1]
//   }


//      let rest = zigzag(root)

//     //  if(res[0]>max || res[1]>max)
//     //     return Math
//   return max;

  /*
    start by passing 0 for left and right on root
        if left or right is greater than max, replas max 
    - if node has left, call left with right +1
    - if node has right, call it with left+1

max=0
1 0, 0 
1 0, 1
1 2, 0
1 0, 3
1 4, 0
  */  

let max=0;
  function zigzag(node, left, right){

    if(!node)
        return;
    max= Math.max(left, right, max)

    zigzag(node.left, 0, left+1)
    zigzag(node.right, right+1, 0)

  }

  zigzag(root, 0, 0)
  return max
};