function isMonotonic(nums: number[]): boolean {
    let increasing = nums[0] < nums[nums.length-1];
    let prev=nums[0];
    for(let i=1;i<nums.length; i++){
        const val = nums[i];

        if(increasing && val<prev)
            return false
        if(!increasing && val>prev)
            return false
        prev = val
        
    }
    return true;
};