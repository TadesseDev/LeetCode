function largestPerimeter(nums: number[]): number {
    /*
    - [2,2,3,6]
    */
    const sn = nums.sort((a,b)=>a-b)
    let win = sn.length
    while(--win>1){
        if(sn[win]+sn[win-1] > sn[win-2] && sn[win-1]+sn[win-2] > sn[win] && sn[win-2]+sn[win] > sn[win-1])
        return sn[win]+sn[win-1]+sn[win-2]
    }
    return 0
};