/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filterArray = [] 
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i))
            filterArray.push(arr[i])
    }
    return filterArray
};