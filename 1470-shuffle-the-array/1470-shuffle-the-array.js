/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let res=[]
    for(let i=0;n<nums.length;i++,n++){
        res.push(nums[i],nums[n])
    }
    return res
};