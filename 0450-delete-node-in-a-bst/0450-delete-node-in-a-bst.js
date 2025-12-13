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
 * @param {number} key
 * @return {TreeNode} 
 */
var deleteNode = function(root, key) {
    /*
    - delete phase
        - find the parent node for the node to be deleted. 
        - if root it to be deleted, mark right as a root and move to insert mode.
        - move the left/right up and the and mark the other as inserted node
            - if right node exist 
                - bring the right node up and set the left side to be inserted phase with the right node to be where inserted
            - if no right node
                - bring left node and return  
    - insert phase
        - compaire with the current node and decde if should go to left or right 
        - if in betwen 
            - insert the incoming node and mark the remonaing node as insert
            - till no more node to insert
    return root
    */

    // delete phase
    function deletePhase(node, val){
        if(!node)
            return null
        if(node.left?.val==val){
            const temp = node.left.left; // 1
            node.left=node.left.right // null
            return insertPhase(node.left|| node, temp)
        }
        else if(node.right?.val==val){
            const temp = node.right.left; // null
            node.right=node.right.right // null
            return insertPhase(node.right || node, temp)
        }
        return val < node.val ? deletePhase(node.left, val) : deletePhase(node.right, val)
    }

    function insertPhase(parent, chiled){ // 4, 2 
        if(!parent||!chiled)
            return null
        
        if(parent.val<chiled.val){
            if(!parent.right){
                parent.right=chiled // 12
                return;
            }
            else if(chiled.val>parent.right.val){
                return insertPhase(parent.right, chiled) // 9. 12
            }
            else if(chiled.val<parent.right.val){
                let temp=parent.right
                parent.right=chiled;
                return insertPhase(chiled, temp)
            }
        }
        else if(parent.val>chiled.val){
            if(!parent.left){
                parent.left=chiled
                return;
            }else if(chiled.val>parent.left.val){
                return insetPhase(parent.left, chiled)
            }else if(chiled.val<parent.left.val){
                const temp = parent.left // 12
                parent.left=chiled // 7
                return insertPhase(chiled, temp)
            }
        }
    }

    // if root is to be removed
    if(root?.val==key){
        if(root.right){
        const temp=root.left;
        root=root.right 
        insertPhase(root, temp)
        }else {
            return root.left
        }
    } else {
        deletePhase(root, key)
    }
    return root;
};