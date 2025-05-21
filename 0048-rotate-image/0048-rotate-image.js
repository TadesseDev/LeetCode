/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    /*
    - create an empty result array
    - iterat throguh untill we the matrix first eement has length 
        - create anempty row array
        - iterat through the matrix length again
            pop the last element from each row and unshift it to the new row 
        - push row array to result array 
    - return result array 
    */
    const len = matrix.length
    for(let i=0; i<len;i++){
        matrix.splice(len,0,[])
        for(let j=0;j<len;j++){
            matrix[len].unshift(matrix[j].pop())
        }
    }
    for(let i=0;i<len;i++){
        matrix.shift()
    }
    return matrix
};