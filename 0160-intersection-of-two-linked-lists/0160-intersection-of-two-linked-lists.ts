/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    let h1=headA;
    let h2=headB;

    // if(headA.next == headB)
    // return headA
    while(h1!==h2){
        if(!h1)
            h1=headB
        if(!h2)
            h2=headA

        if(h1==h2)
            return h1

        h1=h1.next
        h2=h2.next
    }

    return h1
};