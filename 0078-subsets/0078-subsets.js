/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result=[[]]
    // initialize result as []
    // pass [], nums, 0
    // permtuate the num[0] with [] and push the new subset to result 
    // increment index by 1
    // exit if index == nums.length
    
    function recures(index){
        if(index>=nums.length)
            return
        let j=0
        let tempPerm=[...result]
        while(j<tempPerm.length){
            result.push([...tempPerm[j],nums[index]])
            j++
        }
        recures(++index)        
    }
    recures(0)
    return result
};