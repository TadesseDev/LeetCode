/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sum = (nums.length*(nums.length+1)/2)
    const ourSum = nums.reduce((acc, val)=>acc+val, 0)
    return sum - ourSum 
}
    
    /*
    [0,1,2]
    i=2, j=2, target=2, missing=-1
    */