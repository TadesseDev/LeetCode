/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    /*
    left=0
    right=1
     */
    let arr=[...nums]
    let left=0
    let right=arr.length
    let mid=Math.floor((left+right)/2)//1
    while(left<=right){
        if(target==arr[mid]){ //arr[4]==-1
            return mid
        }else if(target>arr[mid]){//-1>arr[1] | 
            left=mid+1
            // mid=Math.ceil((left+right)/2)//1
        }else{
            right=mid-1 // // //
        }
            mid=Math.floor((left+right)/2)//1
    }
    return -1
};