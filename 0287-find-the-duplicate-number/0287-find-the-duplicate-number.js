/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    /*
        [1,3,4,2,2]
        i=3=2
        j=2=2
    */
    let j=nums[nums[nums[0]]],i=nums[nums[0]];
    while(i!=j){
        i=nums[i]
        j=nums[nums[j]]
    }
    j=nums[0]
    while(i!=j){
    // console.log(i,j)
        i=nums[i]
        j=nums[j]
    }
    /*
       [1,3,4,2,2]
        i=2=4=2
        j=1=3=2
    */
    return i
};