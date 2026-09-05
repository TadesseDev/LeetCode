function isMonotonic(nums: number[]): boolean {
    let increasing = nums[0] < nums[nums.length-1];
    let prev=nums[0];

    if(increasing)
    for(let i=1;i<nums.length; i++){
        const val = nums[i];
        if(val<prev)
            return false
        prev = val
    }

    else
    for(let i=1;i<nums.length; i++){
        const val = nums[i];
        if(val>prev)
            return false
        prev = val
    }
    
    return true;
};