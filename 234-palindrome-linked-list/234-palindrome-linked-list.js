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
    let first=head;
    function isPalind(node){
        if(!node)
            return true
        let ret=isPalind(node.next)
        if(!ret) return ret
        if(first.val!=node.val)
            return false;
        first=first.next;
        return true;
    }
    return isPalind(head)
};