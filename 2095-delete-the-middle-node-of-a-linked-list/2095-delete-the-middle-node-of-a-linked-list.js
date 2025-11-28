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
var deleteMiddle = function(head) {
    let tail = head;
    let count=0;
    while(tail){
        count++;
        tail=tail.next;
    }
    let half=Math.ceil(count/2);
    tail=head;
    while(count>half+1){
        count--;
        tail=tail.next;
    }

if(tail.next)
    tail.next = tail.next.next
else 
head=null

    return head
};