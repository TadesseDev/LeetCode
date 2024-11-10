/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const hash = {}
    
    for(let i=0; i<this.length; i++){
        const key = fn(this[i])
        if(hash[key])
            hash[key].push(this[i])
        else
            hash[key]=[this[i]]
    }
    return hash
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */