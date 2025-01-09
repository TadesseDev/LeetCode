function isMonotonic(nums: number[]): boolean {
    // const newArr = nums.sort((a,b)=>a-b)

    let incre = true
    let dec = true
    for(let i=0;i<nums.length-1 && incre; i++){
        if(nums[i]>nums[i+1] )
            incre = false
    }

if(incre)
    return true 
    for(let i=nums.length-1;i>0 && dec; i--){
        if(nums[i-1]<nums[i] )
            dec = false
    }
    return dec
};