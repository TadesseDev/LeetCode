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
    let set=new Set()
    while(left<right){
        if(set.has(mid))
            return -1
        set.add(mid)
        if(target==arr[mid]){ //arr[4]==-1
            return mid
        }else if(target>arr[mid]){//-1>arr[1] | 
            left=mid
            mid=Math.ceil((left+right)/2)//1
        }else{
            right=mid // // //
            mid=Math.floor((left+right)/2)//1

        }
        // if(target>arr[right]||target<arr[left])
        //     return -1
    }
    return -1
};