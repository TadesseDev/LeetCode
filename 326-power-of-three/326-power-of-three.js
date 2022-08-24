/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<1)
        return false
while(n>1){
    if(n%3!=0)
        return false;
    n=n/3
}
    return true;
};