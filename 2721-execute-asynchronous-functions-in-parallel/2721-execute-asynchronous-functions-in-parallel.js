/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((res, rej)=>{
        const results = []
        for(let i=0;i<functions.length; i++){
            functions[i]().then((val)=>{
                results[i]=val
                if(Object.keys(results).length == functions.length){
                    res(results)
                }
            }).catch(err=>rej(err))
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */