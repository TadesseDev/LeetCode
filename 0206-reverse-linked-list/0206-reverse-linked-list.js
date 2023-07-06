/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(!head)
        return head 
    function reverse(node){
        if(!node.next)
            return [node, node]
        let res=reverse(node.next)
        node.next=null
        res[0].next=node
        return [node, res[1]]
    }
    return reverse(head)[1]
};