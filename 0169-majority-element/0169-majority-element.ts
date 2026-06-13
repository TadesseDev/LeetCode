function majorityElement(nums: number[]): number {
     nums.sort((a,b)=>a-b);
    const majority = Math.floor(nums.length/2);
    let i=0;
    while(i<nums.length){
        let count=0;
        let start = nums[i];
        while(i<nums.length && nums[i]==start){
            i++;
            count++;
        }

        if(count>majority)
            return start;
    }
    return undefined;
};