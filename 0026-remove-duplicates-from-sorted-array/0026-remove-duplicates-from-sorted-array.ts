function removeDuplicates(nums: number[]): number {
    
    let i=1

    while(i<nums.length){
        if(nums[i] == nums[i-1]){
            let ind = i+1;

            while(ind < nums.length && nums[ind] == nums[i]){
                ind++;
            }
            nums.splice(i, ind-i)
        }
        i++;
    }

    return nums.length;
};