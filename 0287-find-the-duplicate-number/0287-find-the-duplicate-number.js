/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
let hash={} 
let i=0
    while(!hash[nums[i]]){
        hash[nums[i]]=true
        i+=1
    }
    return nums[i]
};