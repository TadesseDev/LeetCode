function sortedSquares(nums: number[]): number[] {
    const num = nums.map(x => x*x);
    const result = [];
    for(let i=0, j=num.length-1;j>=i; ){
        if(num[i]>num[j]){
            result.unshift(num[i])
            i++
        } else {
            result.unshift(num[j])
            j--
        }
    }
    // console.log(num, result)
    return result;
};