/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    // prepare a separate array for mentaining the indexes of inserted elements;
    const vauesPointer = [];
    let soredList = []
    const result = [];
    // staer by sorting the first k elements 

    /**
    [1,3,-1,-3,5,3,6,7], k = 3
    [1  3  -1] -3  5  3  6  7

    i=3;
    const vauesPointer = [1,3,-1,-3,5,3,6];
    const soredList = [3,6]
    const result = [1, -1, -1,3,5];
     */

    function insert (val){
        // let index=0;
        // while(index<soredList.length && soredList[index]<val){
        //     index++;
        // }
        // soredList.splice(index, 0, val);
        // soredList = [...soredList, val].sort((a,b)=>a-b)

        let left=0;
        let right=k-1;
        let midd = 0;
        while(left<=right){
            midd = Math.floor((left+right)/2);
            if(soredList[midd]==val)
            break
            else if(val>soredList[midd])
            left = midd+1
            else 
            right = midd-1
        }
         midd = Math.ceil((left+right)/2);
        soredList.splice(midd, 0, val);
    }

    function removeElement(val){
        const index = soredList.indexOf(val);
        soredList.splice(index, 1);
    }

    function findMedian(){
        let median = null;
        if(k%2==0){
         median = (soredList[Math.floor((k-1)/2)] + soredList[Math.ceil((k-1)/2)]) / 2;
        } else {
            median = soredList[Math.floor(k/2)]
        }
        result.push(median)
    }

    for(let i=0; i<k; i++){
        insert(nums[i]);
        vauesPointer.push(nums[i])
    }

    findMedian();

    for(let i=k; i<nums.length; i++){
        removeElement(vauesPointer[vauesPointer.length-k])
        insert(nums[i])
        vauesPointer.push(nums[i])
        findMedian();
    }

return result;
    // remove the elements at indexIdentifies[0]
    // insert the new element to its approprate position 
    // find and store the median 
    // continue till array.length

};