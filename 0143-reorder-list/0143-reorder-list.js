/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    /*
    head
    nextHead
    */
    let arr=[]
    let k=0
    while(head){
        arr.push(head)
        head=head.next
        arr[k].next=null
        k+=1
    }
    let i=0,j=arr.length-1
    let newArr=[]
    while(i<j){
        newArr.push(arr[i])
        newArr.push(arr[j])
        i+=1
        j-=1
    }
    if(i==j)
        newArr.push(arr[i])
    i=1
    while(i<newArr.length){
        newArr[i-1].next=newArr[i]
        i+=1
    }
    // console.log(newArr)
    
    return newArr[0]
};