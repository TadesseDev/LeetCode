/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2)
        return x 
    let i=2,pow=4
    while(pow<=x){
        i+=1
        pow=i*i
    }
    return i-1
};