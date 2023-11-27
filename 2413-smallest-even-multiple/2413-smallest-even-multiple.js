/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let mult=1
    while(true){
        if((n*mult)%2==0)
            return n*mult
        mult++
    }
};