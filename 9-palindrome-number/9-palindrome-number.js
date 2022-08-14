/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr=String(x);
    for(let i=0,j=arr.length-1;i<j;i++,j--){
        if(arr.at(i)!=arr.at(j))
            return false;
    }
  return true
};