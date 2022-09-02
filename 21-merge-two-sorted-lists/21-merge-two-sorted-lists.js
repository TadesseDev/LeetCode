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
    let res=null;
    if(list1&&list2){
     if(list1.val<list2.val){
        res=list1;
        list1=list1.next;
    }
    else{
        res=list2;
        list2=list2.next;
    }
    }
    else if(list1){
        res=list1;
        list1=list1.next;
    }
    else if(list2){
        res=list2;
        list2=list2.next;
    }
    let head=res;
    while(list1||list2){
        while((list1&&list2)&&list2.val<=list1.val){
            res.next=list2;
            res=res.next;
            list2=list2.next;
        }
    if(list1){
        res.next=list1;
        res=res.next;
        list1=list1.next;
        }
    else {
        res.next=list2;
        res=res.next;
        list2=list2.next;
        }
    }
    return head;
};