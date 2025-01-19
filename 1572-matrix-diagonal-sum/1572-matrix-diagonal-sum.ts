function diagonalSum(mat: number[][]): number {

    let j=0;
    let mid=Math.floor(mat.length/2)
    let pimaryDiagonal = mat.reduce((sum, row)=>sum+row[j++], 0)
    let secondayDiagonal = mat.reduce((sum, row)=>sum+row[--j], 0)
    const shared = mat.length%2==0 ? 0 : mat[mid][mid]
    return (pimaryDiagonal+secondayDiagonal)-shared
};