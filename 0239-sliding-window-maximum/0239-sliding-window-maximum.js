/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res=[]
    let j=0,i=k, max=nums[0]
    while(j<i){
        if(nums[j]>max)
            max=nums[j]
        j+=1
    }
    j=0
    res.push(max)
    while(i<nums.length){
        if(nums[i]>max){
            max=nums[i]
        }else if(nums[j]==max){
            let temp=j+1, newMax=nums[temp]
            while(temp<=i){
                if(newMax<nums[temp])
                    newMax=nums[temp]
                temp+=1
            }
            max=newMax
        }
        res.push(max)
        j+=1
        i+=1
    }
    return res
};