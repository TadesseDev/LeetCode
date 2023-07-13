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
    let sum=l1.val+l2.val
    let cary=0
    if(sum>9){
        sum-=10
        cary=1
    }
    
    function recurse(cary, node, n1, n2){
        if(!n1&&!n2){
            if(cary>0)
                node.next=new ListNode(cary)
            return null
        }
        let sum=(n1?.val||0)+(n2?.val||0)+cary
         cary=0
        if(sum>9){
            sum-=10
            cary=1
        }
        node.next=new ListNode(sum)
        recurse(cary, node.next, n1?.next, n2?.next)
    }
                
    let head=new ListNode(sum)
    recurse(cary, head, l1.next, l2.next)
    return head
};