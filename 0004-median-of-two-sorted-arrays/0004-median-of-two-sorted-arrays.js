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
            nums1.splice(i,0,nums2[j])
            j+=1
            i+=1
        }
        i+=1
    }
    nums1.push(...nums2.slice(j, nums2.length))
    // console.log(nums1)
    let len=nums1.length-1
    return (nums1[Math.floor(len/2)]+nums1[Math.ceil(len/2)])/2
};