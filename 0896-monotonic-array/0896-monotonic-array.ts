function isMonotonic(nums: number[]): boolean {
    let increasing = nums[0] < nums[nums.length-1];
    let stack=[nums[0]];
    for(let i=1;i<nums.length; i++){
        const val = nums[i];

        if(increasing && val<stack[stack.length-1])
            return false
        if(!increasing && val>stack[stack.length-1])
            return false
        
        stack.push(val)
    }
    return true;
};