/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {

/*
* iterat to the last, keep counting as we call next node node. 
* return last node as an array
* keep unshifting and returning till array.length == current index; 
* then keep suming and compairing to max sum
* update max sum an unshift the element from the array
* finally return max
*/
// let max = 0;
//  function conpairTwins(current, index){
//     if(!current.next)
//         return [current]
//     const res = conpairTwins(current.next, index+1);
    
//     if(res.length-1==index){
//         const twin=res.shift()
//         if(twin.val+current.val > max)
//             max=twin.val+current.val
//     }
//     else {
//         res.unshift(current)
//     }
//     return res;
//  }

//  conpairTwins(head, 0)
//  return max

const arr=[];
let temp=head;
let max=0;
while(temp){
    arr.push(temp)
    temp=temp.next
}

for(let i=arr.length/2-1,j=arr.length/2;i>=0&&j<arr.length;j++,i--){
    if(arr[j].val+arr[i].val>max)
    max=arr[j].val+arr[i].val;
}
return max;
};