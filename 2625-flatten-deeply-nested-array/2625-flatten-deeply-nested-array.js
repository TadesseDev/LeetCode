/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

    function recurseFlate(arr, n){
        const result = []
        if(n==0)
            return arr
        for(let i=0; i<arr.length; i++){
            if(arr[i] instanceof Array && n>0)
            result.push(...recurseFlate(arr[i], n-1))
            else
                result.push(arr[i])
        }
        return result
    }
    
    return recurseFlate(arr, n)
};