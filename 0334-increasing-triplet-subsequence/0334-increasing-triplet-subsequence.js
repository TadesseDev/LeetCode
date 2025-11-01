/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    /* start assuming the first number is the smalles
    - if the number is larger than the last element
    -   if length is 1
            - add the new element
        else if length is 2
            return true
        else if length is 3
            if it is greater than the second item 
                return true 
            else 
                rebalance the array (take the smallest of the 0,2 and 1,3)
    - else 
        if length is 1
            replace it 
        if length is 2 
            add it 
        if length is 3
            replace it 
    - 
    */
// [0,4,1,-1,2]
// results=[0,1,-1]
// len = 3
// ele = 2
    let results=[nums[0]]

    for(let ele of nums){
        let len = results.length
        if(ele>results[len-1]){
            if(len==1)
                results.push(ele)
            else if(len==2)
                return true
            else if(len==3){
                if(ele>results[1])
                    return true
                else   
                    // current elemnt is greater than last element but not the second elemtn 
                    if(results[2]>results[0])
                        return true
                    else
                        results=[results[2], ele]
            }
        } else if(ele<results[len-1]){
            if(len==1)
                results[0]=ele
            if(len==2){
                if(ele>results[0])
                    results[1]=ele
                else
                    results.push(ele)
            }
            else
                results[2]=ele
        }
    }
    return false
};