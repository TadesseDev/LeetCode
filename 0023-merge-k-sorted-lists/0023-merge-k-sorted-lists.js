/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const merge = function(n1, n2){
    if(!n1||!n2)
        return n1?n1:n2
    let iterator=null
    let temp=n1
    let tempN2=n2
    if(n1.val<=n2.val){
        iterator=n1
        temp=n1.next
    }else{
        iterator=n2
        tempN2=n2.next
    }
    let head=iterator
    while(temp){
        while(tempN2&&tempN2.val<=temp.val){
            iterator.next=tempN2
            tempN2=tempN2.next
            iterator=iterator.next
        }
        iterator.next=temp
        temp=temp.next
        iterator=iterator.next
    }
    iterator.next=null
    if(tempN2){
        iterator.next=tempN2
    }
    return head
}
var mergeKLists = function(lists) {
    // consider the first linked list is sorted 
        // iteratvely merge the rest of the linked list to the first list 
        // complexity O(n*m)
    if(lists.length<1)
        return null
    let head=lists[0]
    for(let i=1; i<lists.length; i++){
        head=merge(head, lists[i])
    }
    return head;
}; 