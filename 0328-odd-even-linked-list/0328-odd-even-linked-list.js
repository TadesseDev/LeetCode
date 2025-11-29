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
var oddEvenList = function(head) {
    /*
    - odd=head, 
    - even=head.next,
    - while even?.next
        - odd.nex=even.next
        - even.next=even.next.next
        *   odd: 2, 3, 6, 7
        *   even: 1, 5, 4, null
    - odd.next=even
    - return head
    */
if(!head)
    return head

    let odd=head
    let even=head?.next
    let evenStart=even;
    while(even?.next){
        odd.next=even.next
        odd=odd.next;
        even.next=even.next.next
        even=even.next
        odd.next=null
        // console.log(even, odd)
    }
    odd.next=evenStart
    return head
};