/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    const hash1 = new Map(nums1.map(val=>[val, true]));
    const hash2 = new Map(nums2.map(val=>[val, true]));

    Array.from(hash1.keys()).forEach(val=>{
        if(hash2.has(val)){
            hash2.set(val, false)
            hash1.set(val, false)
        }
    });

    const aswer1 = Array.from(hash1.entries()).filter(item=>item[1]).map(item=>item[0])
    const aswer2 = Array.from(hash2.entries()).filter(item=>item[1]).map(item=>item[0])

    return [aswer1, aswer2]
};