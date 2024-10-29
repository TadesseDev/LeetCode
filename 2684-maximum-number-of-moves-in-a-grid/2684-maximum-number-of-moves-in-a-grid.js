/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    let max=0;
    const memo = new Map()
    function gridMove(row, col,  count){
        if(count>max)
            max=count
            if(memo.get(`${row} ${col}`))
                return 
        memo.set(`${row} ${col}`, true)
        const possibleMoves = [];
        const currentVal = grid[row][col];
        const topVal = row>0 && col+1<grid[0].length ? grid[row-1][col+1] : currentVal -1;
        const leftVal = col+1<grid[0].length ? grid[row][col+1] : currentVal -1;
        const bottomValue = row+1< grid.length && col+1<grid[0].length ? grid[row+1][col+1] : currentVal -1;
        if(topVal > currentVal)
            possibleMoves.push([row-1, col+1])
        if(leftVal > currentVal)
            possibleMoves.push([row, col+1])
        if(bottomValue > currentVal)
            possibleMoves.push([row+1, col+1])
        
        for(let i=0; i<possibleMoves.length; i++){
            gridMove(possibleMoves[i][0], possibleMoves[i][1], count+1)
            
        }
    }
    for(let i=0;i<grid.length; i++){
        gridMove(i,0,0)
    }
    return max;
};