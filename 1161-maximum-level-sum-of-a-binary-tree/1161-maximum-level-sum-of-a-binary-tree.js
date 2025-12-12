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
var maxLevelSum = function(root) {
    /*
    - set max a root.val
    - set Maxlevel =1
    - level=1
    - start with level 2 as [root.left, root.right]
    - inrement level;
    - sum eveything ion that level and see in it exceed the max
        if true, replace max and maxLevel. 
    - collect the next level, by collecting the ledt and tight of nodes ont he current level
    - repet recursion 
    */

    let max=root.val;
    let maxLevel=1;
    let level=1;

    function traceLevels(nodes){
        if(!nodes.length)
            return
        level++;
        const nextLevel=[];
        let sum=0;
        while(nodes.length){
            let node=nodes.shift();
            sum+=node.val;
            node.left&&nextLevel.push(node.left)
            node.right&&nextLevel.push(node.right)
        }
        if(sum>max){
            maxLevel=level;
            max=sum;
        }
        traceLevels(nextLevel)
    }

const levelTwo=[]
root.left&&levelTwo.push(root.left)
root.right&&levelTwo.push(root.right)

    traceLevels(levelTwo)
    return maxLevel
};