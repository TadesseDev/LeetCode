function countOdds(low: number, high: number): number {
    /*
    mat.ceil + 1
    2-8, 6, 3
    3-7, 4, 2  since a && 7 both are odd add 1 = 3
    2-9, 7, 4,
    1-9, 8, 4, since both both 1 and 9 add 1 = 5
    3-8, 5, 3,  
    */

    const rest = Math.ceil((high-low)/2)

    return high%2!=0 && low%2!=0 ? rest+1 : rest
};