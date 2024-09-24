/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    
    let i=0,j=nums.length-1
    let missing = -1
    while(i<=j){
        let target = Math.floor((i+j)/2)
                // console.log(i, j, target)
        if(target === nums[target]){
            i=target+1
        }
        else{
            missing = target
            j=target-1
        }
    }
    return missing != -1 ? missing : i
}
    
    /*
    [0,1,2]
    i=2, j=2, target=2, missing=-1
    */