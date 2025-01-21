/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    /*
    - find rows having 0
    - find column having 0 
    - iteratively fill the rows with 0 to 0
    - iteratively fill the columns with 0 to 0
    */

    const rows = matrix.reduce((accum, row, index) => {
        if(row.includes(0)) 
            accum.push(index);
        return accum;
        },[])
    const cols = matrix.reduce((accum, row, index) => {
             accum.push(
                ...row.reduce((zeros, val, ind)=>{
                 if(val==0 && !accum.includes(ind)) 
                     zeros.push(ind);
                return zeros;
            },[]));
            return accum
        },[])
    matrix.forEach((row, index)=>{
        if(rows.includes(index))
            row.fill(0)
        cols.forEach((col)=>{
            row[col]=0
        })
    })
    
};