/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head)
    return null
    let newNodeIterator=new Node(head.val)
    let newNode=newNodeIterator
    let temp=head.next
    while(temp){
        newNodeIterator.next=new Node(temp.val)
        newNodeIterator=newNodeIterator.next
        temp=temp.next
    }
    temp=newNode
    let headTemp=head
    while(temp){
        let pointer=headTemp.random
        let tempPointer=newNode
        let headPointer=head
        while(pointer!=headPointer){
            tempPointer=tempPointer.next
            headPointer=headPointer.next
        }
        temp.random=tempPointer
        temp=temp.next
        headTemp=headTemp.next
    }
    return newNode
};