interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const hash = {}
    this.forEach((val)=>{
        const key = fn(val)
        if(hash[key]){
            hash[key].push(val)
        }else{
            hash[key]=[val]
        }
    })
    return hash
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */