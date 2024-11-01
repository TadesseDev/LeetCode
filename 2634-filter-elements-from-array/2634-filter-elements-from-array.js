/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filterArray = [] 

    arr.forEach((val, i)=>{
            fn(val, i) && filterArray.push(val)
        });
    return filterArray
};