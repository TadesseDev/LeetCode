/**
 Do not return anything, modify nums1 in-place instead.
 */

 /**

 start from 0 for both arrays i, j
 start with i as the outer loop while i<m && j<num2.length
 on each step 
    check if an element in num2 of j is less than the current element 
        if so 
            push the j to i position in mum1
            increment i,j,m by 1
        if not
            continue to the loop 

if(j>=num2.length)
return num1

remaining = num2.splice(j, last index)
num1.splice(i, lastIndex)
num.concat(remaining)

nums1 = [1,2,2,3,5,6], m = 4, nums2 = [2,5,6], n = 3

i=4
j=1

remaining = [5,6]
4, 


  */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i=0, j=0;

    while(i<m && j<n){

        if(nums2[j]<nums1[i]){
            nums1.splice(i,0,nums2[j])
             j++, m++
        }
        i++
    }

    nums1.splice(m, nums1.length)
    if(j>=nums2.length)
        return 
    
    const remaining = nums2.splice(j, nums2.length);
    nums1.push(...remaining)
};