/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const resArr = []
    while(arr.length){
        resArr.push(arr.splice(0, size))
    }
    return resArr
};
