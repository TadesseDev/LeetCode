function canMakeArithmeticProgression(arr: number[]): boolean {
    const sorted = arr.sort((a,b)=>a-b);
    const diff  = sorted[0]-sorted[1]

    for(let i=1;i<sorted.length;i++){
// console.log(sorted, diff)
        if(sorted[i-1]-sorted[i] != diff)
            return false
    }
    return true
};