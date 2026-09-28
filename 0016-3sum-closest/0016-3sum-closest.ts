function threeSumClosest(nums: number[], target: number): number {
    // let closer = Infinity;
    let closerSum = Infinity
    let sorted = nums.sort((a,b)=>a-b);
    for(let i=0; i<sorted.length; i++){

        let l=i+1, r=sorted.length-1;
        while(l<r){
            let sum = sorted[i]+sorted[l]+sorted[r];
            if(Math.abs(target-sum) < Math.abs(target-closerSum)){
                    // closer = Math.abs(target-sum)
                    closerSum = sum
            }
            if(target-closerSum == 0)
                return sum
            if(target-sum>0){
                l++
            }
            else {
                r--
            }
        }
    }
    return closerSum
};