type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        function recurse(function_list: F[]): number {
            if(function_list.length==0){
                return x
            }

            const current = function_list.splice(0,1)[0]
            const result = recurse(function_list)
            return current(result)
        }
        return recurse(functions)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */