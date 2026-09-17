function sortedSquares(nums: number[]): number[] {
    const num = nums.map(x => x*x);

    for(let i=0, j=num.length-1;j>0; j--){
        if(num[0]>num[j]){
            let shift = num.shift();
            num.splice(j, 0, shift)
            j++
        } 
    }
    return num;
};