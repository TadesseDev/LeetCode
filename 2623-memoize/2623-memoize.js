/**
 * @param {Function} fn
 */
function memoize(fn) {
    let memory={}
    memory[fn]={}
    return function(...args) {
        // console.log(memory[JSON.stringify(fn)][args])
        if(memory[fn][args]){
            // console.log("becomes true")
            return memory[fn][args].result
        }
        result=fn(...args)
        // memory[JSON.stringify(fn)][args]={value: JSON.stringify(args)}
        memory[fn][args]={result: result}
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */