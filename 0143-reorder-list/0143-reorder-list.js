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
    // head
    // nextHead
  
    let arr=[]
    let k=0
    while(head){
        arr.push(head)
        head=head.next
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
    newArr[newArr.length-1].next=null
    return newArr[0]
     */
    
    if(!head.next)
        return head
    let slow=head, fast=head
    // Find the middle of the nodes
    while(fast.next&&fast.next.next){
        slow=slow.next
        fast=fast.next.next
    }
    let first=head, second=slow.next
    slow.next=null;
    // reverse the flow of the second hald
    function reverseNode(next, node){
        if(!node.next){
            node.next=next
    // console.log("Reverse second is: ",next,node)
            return node
        }
        let nextNode=node.next
        node.next=next
    // console.log("Reverse second is: ",node)
        let val= reverseNode(node, nextNode)
        return val
    }
    second=reverseNode(null, second)
        // console.log(second)
    let result=first
    let temp=result
    while(first&&second){
        // let firstTemp=first
        let secondTemp=second
        second=second.next
        first=first.next
        result.next=secondTemp
        result.next.next=first
        result=result.next.next
        // console.log(result)
    }
    return temp
};