/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
        function toBe(anoterVal){
          if(val===anoterVal)
              return  true
          throw Error("Not Equal")
      }
    function notToBe(anotherVal){
            if(val !== anotherVal)
                return true   
        throw Error("Equal")
        }

    return ({
        toBe, 
        notToBe
            })
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */