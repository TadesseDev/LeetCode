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
                - mark he current node as same symbol, 
                - loop throw only the current row starting from 0 and see if you can find 1
                    - if found
                    - call recustion with j,0 to be visited next
    - continue loop till all cell are tracked 
    return count
    [
    [1,0,0,1], ,=> 0,0 | x | 0,3 => 3,0 | x | 3,2 | x | => 2,3 | x | 2, 1 | x | => 1,2 | x| 1,1 | x | => 1,1 1, 2 
    [0,1,1,0],
    [0,1,1,1],      0-3
    [1,0,1,1]
    ]

    [
        [1,1,0],
        [1,1,0],
        [0,0,1]
    ]

     */

     let count=0;
     function markProvinces(i, j, symbol){
        isConnected[i][j]=symbol;
        // const nightbours=[[-1, 0], [1,0], [0, -1], [0, 1]]

        // nightbours.forEach(([y,z])=>{
            // console.log([y,z])
            // isConnected[i+y] && isConnected[i+y][j+z] == 1 &&  markProvinces(i+y, j+z, symbol)
        // });
        for(let k=0;k<isConnected[i].length; k++){
            if(isConnected[i][k]==1){
                isConnected[i][k]=symbol;
                markProvinces(k, i, symbol)
            }

        }
     }

     for(let i=0; i<isConnected.length; i++){
        for(let j=0; j<isConnected.length; j++){
            if(isConnected[i][j]==1){
                console.log([i,j])
                count++;
                markProvinces(i, j, Symbol())
            }
        }
     }
     return count;
};