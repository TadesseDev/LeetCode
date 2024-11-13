/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {

    function compactMe(obj){
        if(!(obj instanceof Object))
            return obj
        const result = Array.isArray(obj) ? [] : {}
       for(let key in obj){
            if(obj[key]){
                const response = compactMe(obj[key])
               Array.isArray(obj) ? result.push(response) : result[key] = response
            }
        }
        return result
    }
    return compactMe(obj)
};