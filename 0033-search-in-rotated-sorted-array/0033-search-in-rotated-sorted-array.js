/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start_i=0,end_i=nums.length-1
    
    while(start_i<=end_i){
        let mid=Math.floor(((start_i+end_i)/2))
        if(nums[mid]==target )
            return mid;
        
        if(nums[start_i] <= nums[mid]){
            if(target >= nums[start_i] && target<nums[mid] ){
                end_i=mid-1 
            }
            else{
                start_i=mid+1 
            }
        }
        else{
            if(target>nums[mid] && target<=nums[end_i]){
                start_i=mid+1
            }
            else{
                end_i=mid-1
            }
        }
    }
        
    return  -1; 
};