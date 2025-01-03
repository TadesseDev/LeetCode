function createCounter(n: number): () => number {
    let res = n
    return function() {
        return n++
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */