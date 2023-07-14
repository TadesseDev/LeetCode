/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort((a,b)=>a-b)
    let i=0
    while(nums[i]!=nums[i+1]){
        i+=1
    }
    return nums[i]
};