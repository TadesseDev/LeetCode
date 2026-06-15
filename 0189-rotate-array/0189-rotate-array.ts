/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k%nums.length;
    // console.log(nums.length-k, k)
      nums.unshift(...nums.splice(nums.length-k, k))
};