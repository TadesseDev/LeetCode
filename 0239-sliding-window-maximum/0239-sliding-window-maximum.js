/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res=[]
    let j=0,i=k, max=0
    while(j<i){
        if(nums[j]>nums[max])
            max=j
        j+=1
    }
    j=0
    res.push(nums[max])
    while(i<nums.length){
        if(nums[i]>=nums[max]){
            max=i
        }else if(j==max){
            let temp=j+1, newMax=temp
            while(temp<=i){
                if(nums[newMax]<nums[temp])
                    newMax=temp
                temp+=1
            }
            max=newMax
        }
        res.push(nums[max])
        j+=1
        i+=1
    }
    return res
};