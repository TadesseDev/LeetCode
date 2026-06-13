function majorityElement(nums: number[]): number {
    //  nums.sort((a,b)=>a-b);
    // const majority = Math.floor(nums.length/2);
        let i=0;
        let count=0;
        let candidate = nums[i];
        while(i<nums.length){
            if(count==0)
                candidate = nums[i];
            count+= candidate == nums[i] ? 1 : -1;
            i++;
        }

        // if(count>majority)
            return candidate;

};