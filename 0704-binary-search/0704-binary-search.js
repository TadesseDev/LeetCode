/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let arr=[...nums]
    let left=0
    let right=arr.length
    let mid=Math.floor((left+right)/2)
    while(left<=right){
        if(target==arr[mid]){ 
            return mid
        }else if(target>arr[mid]){
            left=mid+1
        }else{
            right=mid-1 // // //
        }
            mid=Math.floor((left+right)/2)
    }
    return -1
};