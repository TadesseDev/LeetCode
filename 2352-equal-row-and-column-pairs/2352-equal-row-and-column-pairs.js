/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowHash = new Map();
    let count=0;
    for(let i=0;i<grid.length;i++){
        let row=""
        for(let j=0;j<grid[i].length;j++){
            row+="," + grid[i][j]
        }
        rowHash.set(row, rowHash.has(row) ? rowHash.get(row)+1 : 1)
    }
    console.log(rowHash)
    for(let i=0;i<grid.length;i++){
        let row=""
        for(let j=0;j<grid[i].length;j++){
            row+=","+grid[j][i]
        }
        if(rowHash.has(row))
            count+=rowHash.get(row);
    }
    return count
};