/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let first=head
    let last=head;
    while(last.next){
        temp=last;
        last=last.next;
        last.pre=temp;
    }
    
    while(last.val==first.val){
        console.log(last.val)
        if(last==first)
            return true
        last=last.pre
        if(last==first)
            return true
        first=first.next;
    }
    
    return false
};