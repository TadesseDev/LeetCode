/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    /**
    - find the first invalid element
    - if there are no invalid item return length -1;
    - set win1=0, invalidIndex=i // invalid should always have the first invalid item
    - pass the first invalid value and continue till found the second invalid item
    - recalculate betwen wind1 and i, 
    - win1=lastInvalid+1, lastInvalid=i
    - if(lastindex!=0)
        recalculate the maxCount
    */

    let i=0;
    while(nums[i]!=0&&i<nums.length){
        i++
    }

if(i==nums.length)
    return i-1
let win1=0, invalidIndex = i;
let maxCount=i;

i++
    while(i<nums.length){
        if(nums[i]==0){
            if(maxCount<(i-win1)-1)
                maxCount=(i-win1)-1
            win1=invalidIndex+1;
            invalidIndex=i;
        }
        i++
    }

    if(nums[i-1]==1){
        if(((i-win1)-1) > maxCount)
            maxCount = (i-win1)-1
    }
    
    return maxCount
};