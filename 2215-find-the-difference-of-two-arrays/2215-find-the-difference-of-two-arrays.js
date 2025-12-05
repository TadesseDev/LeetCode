/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    const hash = new Map([...nums1.map(val=>[val, 1])]);
    // const hash2 = new Map(nums2.map(val=>[val, true]));

    nums2.forEach(val=>{
        if(hash.has(val) && hash.get(val)!=2){
            hash.set(val, 3)
        }else{
            hash.set(val, 2)
        }
    });

    // const aswer1 = Array.from(hash1.entries()).map(item=>item[0])
    // const aswer2 = Array.from(hash2.entries()).filter(item=>item[1]).map(item=>item[0])

    // return [aswer1, aswer2]
    return Array.from(hash.entries()).reduce((store, value)=>{
        if(value[1]==1)
        store[0].push(value[0])
        else if(value[1]==2)
        store[1].push(value[0])
        return store
    },[[],[]])
};