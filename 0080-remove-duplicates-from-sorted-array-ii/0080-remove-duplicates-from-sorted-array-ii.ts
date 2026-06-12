function removeDuplicates(nums: number[]): number {

    // start from i=2
    // on each iteration 
    //   compair if i==i-2
            // if true 
                // start from k=i+1 and go till end or k != i
                // remove all element i to k
            // if not 
            // continue 

        let i=2;
        while(i<nums.length){

            if(nums[i]==nums[i-2]){
                let k=i+1;
                while(k<nums.length && nums[k]==nums[i])
                    k++;
                
                nums.splice(i, k-i)
            }
            i++;
        }
        return nums.length;
    
};