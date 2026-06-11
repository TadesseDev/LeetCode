function removeDuplicates(nums: number[]): number {
    
    let i=1, length=nums.length;
    // [1,2,2,]

    while(i<nums.length){
        if(nums[i] == nums[i-1]){
            let ind = i+1;

            while(ind < nums.length && nums[ind] == nums[i]){
                ind++;
            }
            let eleToRemove = ind-i;
            let newElements = nums.splice(i, eleToRemove)
            // length -=eleToRemove;
        }
        i++;
    }

    return nums.length;
};