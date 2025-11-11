/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let lsum=0, rsum=0;
    let iterator = 0;
    do{
        rsum+=nums[iterator]
        iterator++
    }while(iterator<nums.length);

iterator=0
    do{
        rsum-=nums[iterator]
        if(lsum==rsum)
        return iterator
        lsum+=nums[iterator]
        iterator++
    }while(iterator<nums.length)

    return -1;
};