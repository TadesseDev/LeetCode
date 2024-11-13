/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {

    if(!(obj instanceof Object))
        return obj
    const result = obj instanceof Array ? [] : {}
    
    const keys = Object.keys(obj)
    keys.forEach((key)=>{
        if(obj[key]){
            const response = arguments.callee(obj[key])
           result instanceof Array ? result.push(response) : result[key] = response
        }
    })
    return result
};