function maximumWealth(accounts: number[][]): number {
    const wealthList = accounts.reduce((accum, row)=>{
        const sum = row.reduce((sum, val)=>sum+val, 0)
        accum.push(sum)
        return accum
    }, [])

    return Math.max(...wealthList)
};