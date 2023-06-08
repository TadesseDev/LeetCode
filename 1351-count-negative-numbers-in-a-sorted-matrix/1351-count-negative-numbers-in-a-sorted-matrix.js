/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0,i=0
    while(i<grid.length){
        let j=grid[i].length-1
        while(j>=0 && grid[i][j]<0){
            j-=1
        }
        count+=grid[i].length-(j+1)
        i+=1
    }
    return count
};