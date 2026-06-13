function majorityElement(nums: number[]): number {
     nums.sort((a,b)=>a-b);
    const majority = Math.floor(nums.length/2);

    // console.log(nums)
    for(let i=0; i<nums.length; i++){
        let count=0;
        let start = nums[i];
        while(i<nums.length && nums[i]==start){
            i++;
            count++;
        }

        //  console.log(count, majority)
        if(count>majority)
            return start;
        i--;
    }
    return undefined;
};