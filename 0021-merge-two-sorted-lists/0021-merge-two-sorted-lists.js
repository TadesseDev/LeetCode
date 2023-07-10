/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let list=null
    if(list1&&list2){
        if(list1.val<list2.val){
            list=list1
            list1=list1.next
        }else{
            list=list2
            list2=list2.next
        }
            
    }
    else if(list1)
        return list1
    else
        return list2
    
    let head=list
    while(list1){
        while(list2&&list2.val<=list1.val){
            list.next=list2
            list2=list2.next
            list=list.next
        }
        list.next=list1
        list1=list1.next
        list=list.next
    }
    
    
        while(list2){
            list.next=list2
            list2=list2.next
            list=list.next
        }
    return head
};