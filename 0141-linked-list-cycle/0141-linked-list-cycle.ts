/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null<LL
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {

    if(!head || !head.next)
        return false
    let slow = head.next;
    let fast = head.next.next;

    while(slow!=fast && slow && fast){
        slow = slow.next;
        fast = fast.next?.next
    }

    return slow==fast
};