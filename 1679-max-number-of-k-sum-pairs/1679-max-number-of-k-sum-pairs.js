/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {

    function quickSort(arr){
        if(arr.length<=1)
            return arr  
        let small=[], large=[];

        for(let i=1;i<arr.length;i++){
            if(arr[i]>arr[0])
                large.push(arr[i])
            else 
                small.push(arr[i])
        }

        return [...quickSort(small), arr[0], ...quickSort(large)]
    }

    const sorted = nums.sort((a,b)=>a-b)
    let count=0
    console.log(sorted)
    for(let i=0,j=sorted.length-1;i<j;){
        let sum=sorted[i]+sorted[j]
        if(sum==k){
            count++
            j--
            i++
        }
        else if(sum>k)
            j--
        else 
            i++
    } 
    return count
};