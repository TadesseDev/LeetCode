/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let j=nums[nums[nums[0]]],i=nums[nums[0]];
    while(i!=j){
        i=nums[i]
        j=nums[nums[j]]
    }
    j=nums[0]
    while(i!=j){
 
        i=nums[i]
        j=nums[j]
    }

    return i
};