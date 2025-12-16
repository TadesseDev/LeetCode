/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    /**
    - set count as 0
    - loop through the matrix untill 1 is found 
        - if found 
            - increment count,
            - mark that as a starting point 
            - start a recursion to mark all connected cells
                - replace all the conneced cells to a uniq value that is not 0 nor 1, bust should be the same for all city in the proviences 
                - when there is none return to the main loop 
    - continue loop till all cell are tracked 
    return count
     */

     let count=0;
     function markProvinces(i, j, symbol){
        isConnected[i][j]=symbol;
        const nightbours=[[-1, 0], [1,0], [0, -1], [0, 1]]

        nightbours.forEach(([y,z])=>{
            // console.log([y,z])
            isConnected[i+y] && isConnected[i+y][j+z] == 1 &&  markProvinces(i+y, j+z, symbol)
        });
     }

     for(let i=0; i<isConnected.length; i++){
        for(let j=0; j<isConnected.length; j++){
            if(isConnected[i][j]==1){
                count++;
                markProvinces(i, j, Symbol())
            }
        }
     }
     return count;
};