/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left=0
    let right=matrix.length-1
    let mid=0
    while(left<=right){
    // console.log(mid, matrix.length)
        mid=Math.floor((left+right)/2)
        if(matrix[mid][0]==target){
            return true
        }else if(target>matrix[mid][0]){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    
    // console.log(mid, matrix.length)
    if(target>matrix[mid][matrix[0].length-1]){
            mid+=1
        }else if(target<matrix[mid][0]){
            mid-=1
        }
    if(mid>=matrix.length||mid<0)
        return false
    let row=matrix[mid]
    left=0,right=row.length-1
    
    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(row[mid]==target){
            return true
        }else if(target>row[mid]){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return false
};