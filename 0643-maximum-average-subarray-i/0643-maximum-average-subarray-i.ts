function findMaxAverage(nums: number[], k: number): number {
    let sum=0;
    let i=0, j=0;

    while(j<k){
        sum+=nums[j];
        j++
    }
    
    let result=sum;

    while(j<nums.length){
        sum-=nums[i]
        i++, 
        sum+=nums[j];

        if(sum>result)
            result = sum
        j++;
    }
    return result/k
};