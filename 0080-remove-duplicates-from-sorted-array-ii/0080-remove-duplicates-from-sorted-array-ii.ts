function removeDuplicates(nums: number[]): number {

        let i=2;
        while(i<nums.length){

            if(nums[i]==nums[i-2]){
                let k=i+1;
                while(k<nums.length && nums[k]==nums[i])
                    k++;
                nums.splice(i, k-i)
                i++
            }
            i++;
        }
        // if(i==nums.length && nums[i-1]==nums[i-3])
        //  nums.splice(i-1, 1)
        return nums.length;
    
};