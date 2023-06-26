/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged=[]
    let i=0,j=0
    while(i<nums1.length){
        while(j<nums2.length&&nums2[j]<=nums1[i]){
            merged.push(nums2[j])
            j+=1
        }
        merged.push(nums1[i])
        i+=1
    }
    merged.push(...nums2.slice(j, nums2.length))
    // console.log(merged)
    let len=merged.length-1
    return (merged[Math.floor(len/2)]+merged[Math.ceil(len/2)])/2
};