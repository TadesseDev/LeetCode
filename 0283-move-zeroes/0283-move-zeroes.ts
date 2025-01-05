/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let sum = nums.reduce((accum, val)=>accum+val, 0)
    for(let i=0; i<nums.length && sum!=0; i++){
        if(nums[i]!=0){
            sum-=nums[i]
            continue
        }
        let z = nums.splice(i,1)[0]
        nums.push(z)
        i--
    }
};