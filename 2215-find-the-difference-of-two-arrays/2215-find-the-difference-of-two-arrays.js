/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    const hash1 = new Map(nums1.map(val=>[val, true]));
    const hash2 = new Map(nums2.map(val=>[val, true]));
const answer1=[]
const answer2=[]
    Array.from(hash1.keys()).forEach(val=>{
        if(!hash2.has(val)){
            answer1.push(val)
        }
    });

    Array.from(hash2.keys()).forEach(val=>{
        if(!hash1.has(val)){
            answer2.push(val)
        }
    });

    // const aswer1 = Array.from(hash1.entries()).filter(item=>item[1]).map(item=>item[0])
    // const aswer2 = Array.from(hash2.entries()).filter(item=>item[1]).map(item=>item[0])

    return [answer1, answer2]
};