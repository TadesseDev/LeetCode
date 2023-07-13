/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next)
        return null
        
    function removeElement(head){
        if(!head)
            return [1,null]
         let res=removeElement(head.next)
         if(res[0]==n)
              return [res[0]+1, res[1]] 
        head.next=res[1]
         return [res[0]+1, head] 
    }
    return removeElement(head, n)[1]
};