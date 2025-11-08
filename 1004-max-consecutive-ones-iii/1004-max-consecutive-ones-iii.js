/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    /*
    - find the first 0
    - store ind1=0, ind2=first0
    - set count as the number of elements these far (inclusive of the last 0).
    - set maxCount = count 
    - loop from the last index+1 till element end 
        - if we found 0
            - if(count>maxCount)
                maxCount = count  
            - count = count - (ind2 - index1)
            ind1 = ind2, 
            ind2 = currentIndex  
        keep incrementing count, 
        count++
    retrun maxCount
    */

    let indexes=[]
    let count0=k;
    let i=0
    for(;i<nums.length&&count0;i++){
        if(nums[i]==0){
            indexes.push(i)
            count0--
        }
    }
    // console.log(indexes, count0)
    let count = maxCount = i;

    for(;i<nums.length;i++){
        if(nums[i]==0){
            if(count>maxCount)
                maxCount=count
            indexes.push(i)
            let ind1 = indexes.shift() || 0;
            count = (i-ind1) 
        }
        else
            count++
    }

    return count>maxCount ? count : maxCount;
};