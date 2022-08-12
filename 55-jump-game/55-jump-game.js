/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let destination=nums.length-1;
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]>=destination-i)
            destination=i
    }
    return destination==0;
};