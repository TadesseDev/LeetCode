/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result=[]
function isSelfDevidingNumber(number){
    let numbers=number.toString().split("")
    for(let current of numbers){
        if(number%current!=0)
            return false
    }
    return true
}
    while(left<=right){
        if(isSelfDevidingNumber(left))
            result.push(left)
        left++
    }
    return result
};