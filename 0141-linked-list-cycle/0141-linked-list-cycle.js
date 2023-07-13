/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head||!head.next)
    return false
    let slow=head.next, fast=head.next.next
    while(slow!=fast&&fast?.next){
        slow=slow.next
        fast=fast.next.next
    }
    return slow==fast
};