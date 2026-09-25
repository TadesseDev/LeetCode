function threeSum(nums: number[]): number[][] {
    let sorted = nums.sort((a,b)=>a-b);
    const result = [];
    // console.log(sorted)
    for(let i=0; i<sorted.length-2; i++){
        let l=i+1, r=sorted.length-1;
        while(l<r){
            let sum = sorted[l]+sorted[i]+sorted[r];

            if(sum==0)
                result.push([sorted[l],sorted[i],sorted[r]])
            if(sum>0){
                    let nr=sorted[r]
                do {
                    r--
                } while(r>l && sorted[r]==nr);
                    
            }
            else {
                   let nl=sorted[l]
                do {
                    l++
                } while(l<r && sorted[l]==nl);
            }
        }
        while(i<sorted.length-1 && sorted[i]==sorted[i+1])
            i++
    }
    return result;
};