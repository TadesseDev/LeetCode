type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let store = init
    return ({
        increment: function(){return ++store},
        decrement: function(){return --store},
        reset: function(){return store = init;}
    })
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */