/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    for(let i=0, j=nums.length-1;i<j; i++){

        if(nums[i]==0){
            while(j>i && nums[j]==0)
                j--
            nums.splice(j, 0, ...nums.splice(i,1))

            // console.log(nums)
            i--
        }

    }
};