/**
 * @param {Function} fn
 */
function memoize(fn) {
    let memory={}
    memory[fn]={}
    return function(...args) {
        if(memory[fn][args]){
            return memory[fn][args].result
        }
        result=fn(...args)
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