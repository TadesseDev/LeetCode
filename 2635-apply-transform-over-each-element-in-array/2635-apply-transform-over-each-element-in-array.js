/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const transArray = []
    
    for(let i=0; i<arr.length; i++){
        transArray.push(fn(arr[i], i));
            }
    return transArray
};