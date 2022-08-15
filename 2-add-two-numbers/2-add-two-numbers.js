/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let head=new ListNode(0,null);
    let route=head;
    let rem=0
    while(l1||l2||rem!=0){
        let sum=((l1?.val||0)+(l2?.val||0))+rem;
        console.log(rem, sum)
        if(sum>9){
        rem=Math.floor(sum/10)
        route.val=sum-(Math.floor(sum/10)*10);
        }
        else{
        route.val=sum;
        rem=0;
        }
        l1=l1?.next||null
        l2=l2?.next||null
        if(l1||l2||rem!=0){
        route.next=new ListNode();
        route=route.next;
        }
    }
    
    return head;
};