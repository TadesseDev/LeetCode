/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr=String(x);
    let i=0,j=arr.length-1;
    while(i<j){
        if(arr.at(i)!=arr.at(j))
            return false;
        i++,j--;
    }
  return true
};