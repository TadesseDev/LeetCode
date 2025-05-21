/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    /*
    1. set global sum first element 
    2. set current sum to 0 
    3. iterator 
        3.1 sum the current element to the current sum 
        3.2 check if the current sum is greater thatn the global sum 
            3.2.1 yes: checnge the global sum by the current sum 
        3.3 check if the current sum is <0 
            3.3.1 Yes: set current sum to 0 
    4. return global sum 
    */

let grandSum=nums[0], currentSum=0
    for(let i=0;i<nums.length; i++){
        let current = nums[i]
        currentSum+=current
        if(currentSum>grandSum)
            grandSum = currentSum
        if(currentSum<0)
            currentSum=0
    }
return grandSum
};