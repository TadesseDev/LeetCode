/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((res, rej)=>{
        const results = []
        let count=functions.length
        functions.forEach((fun, i)=>{
            fun().then((val)=>{
                results[i]=val
                count--;
                if(count == 0){
                    res(results)
                }
            }).catch(err=>rej(err))
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */