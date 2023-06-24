/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    /*
        min=1
        [3,4,5,1,2]
        l=0
        r=4
        if---
            mid=2
            ---
            (3,4)
            (0,1)
            
            

    */
    let min=nums[0]
    function recurse(l,r){
        if(l>r)
            return;
        if(nums[l]>nums[r]){
            let mid=Math.floor((r+l)/2)
            if(nums[mid]<min)
                min=nums[mid]
            recurse(mid+1,r)
            recurse(l, mid-1)
        }
        else{
            if(nums[l]<min)
                min=nums[l];
        }
    }
    recurse(0,nums.length-1)
  return min  
};