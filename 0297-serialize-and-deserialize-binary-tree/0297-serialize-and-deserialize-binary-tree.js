/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root)
        return "null"
    let left=serialize(root.left)
    let right=serialize(root.right)
    return `${root.val},${left},${right}`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // console.log(data)
    let index=0;
    let result=data.split(",")
    function buildTree(){
        if(result[index]=="null" || index>=result.length){
            // console.log("exception here")
            index+=1
            return null
        }
        let root= new TreeNode(result[index])
        // console.log(result[index])
        index+=1;
         root.left=buildTree()
         root.right=buildTree()
        
        return root
    }
    return buildTree()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */