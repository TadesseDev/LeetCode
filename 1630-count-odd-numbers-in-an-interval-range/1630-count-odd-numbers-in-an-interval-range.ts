function countOdds(low: number, high: number): number {

    const rest = Math.ceil(((high)-low)/2)
    return high%2!=0 && low%2!=0 ? rest+1 : rest
};