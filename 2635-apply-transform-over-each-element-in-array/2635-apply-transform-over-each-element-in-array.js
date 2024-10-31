/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const transArray = []
    
    arr.forEach((ele, index)=>{
                const res = fn(ele, index);
        transArray.push(res);
                });
    return transArray
};