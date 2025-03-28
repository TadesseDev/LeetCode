function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies);
    const result: boolean[] = [];
    for(let i=0;i<candies.length;i++){
        result.push(candies[i]+extraCandies>=max)
    }

    return result;
};