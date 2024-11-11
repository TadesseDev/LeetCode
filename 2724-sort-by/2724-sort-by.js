/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const hash = {}
    for(let i=0;i<arr.length;i++){
        hash[fn(arr[i])] = arr[i]
    }
    
    const sortedIndex = Object.keys(hash).sort((a,b)=>a-b)
    const result=[]
    for(let i=0; i<sortedIndex.length; i++){
        result.push(hash[sortedIndex[i]])
    }
    
    return result
};