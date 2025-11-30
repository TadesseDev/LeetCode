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

    if(!head||!head.next)
    return head

        let head1=head
        let head2=head.next;
        head1.next=null;
        do {
            temp=head2.next
            head2.next=head1;
            head1=head2;
            head2=temp;
            // console.log(head1, head2)
        }while(head2)

        return head1;
};