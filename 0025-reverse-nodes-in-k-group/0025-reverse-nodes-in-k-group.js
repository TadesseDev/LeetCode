/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    function reverse(start, end){
        if(start==end)
            return [end, end]
        let ret = reverse(start.next, end)
        ret[0].next=start
        return [start, end]
    }
    let result=null, left=head, right=0, temp=head, nex=null
    while(temp){
        right+=1
        if(right==k){
            let start=left, end=temp
            temp=temp.next
            let [tai, hea] = reverse(start, end)
                tai.next=null
            if(!result){
                result=hea
                nex=tai
            }else{
                nex.next=hea
                nex=tai
            }
            // console.log(right, result)
            left=temp
            right=0
        }else{
            temp=temp.next
        }
    }
    nex.next=left
    return result
};