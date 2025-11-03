/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;

    for(let i=0;i<len;i++){
        if(nums[i]!=0)
            continue
        let count=0
        do{
            count++
        }while(i+count<len && nums[i+count]==0)
        const spl = nums.splice(i, count)
        nums.push(...spl)
        len-=count
    }
};