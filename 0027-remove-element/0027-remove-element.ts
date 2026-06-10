function removeElement(nums: number[], val: number): number {
    
    let i=0, j=nums.length-1;
    while(i<j){
        // console.log(i)
        if(nums[i]==val){
            while(j>i && nums[j]==val)
                j--
            
            let temp = nums[i]
            nums[i]=nums[j]
            nums[j]=temp
            j--
        }
            i++;

        // console.log(nums, i, j)
    }
    if(i>j)
    i--;

    
    return nums[i]==val ? i : ++i;
};