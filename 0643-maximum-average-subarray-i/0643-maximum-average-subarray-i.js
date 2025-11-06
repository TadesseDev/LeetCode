/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum=0
    for(let i=0;i<k;i++){
        sum+=nums[i]
    }
    let maxSum=sum
    for(let i=k;i<nums.length;i++){
    //    console.log(i,k,sum,nums[i])
    
        if(nums[i-k]<nums[i]){
            sum=0
            for(let j=(i-k)+1;j<=i;j++){
                sum+=nums[j]
            }
            console.log(i-k+1,k,sum,maxSum)
            if(sum>maxSum)
            maxSum = sum;
        }
    }
    
    return maxSum/k
};