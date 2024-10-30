type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let i=init;
    
    function increment(){
        // i+=1
        return ++i
    }
    function decrement(){
        // i-=1
        return --i
    }
    function reset(){
        i=init;
        return i
    }
    
    return ({
        increment,
        decrement,
        reset
    })
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */