/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   return [...String(x)].reverse().join("")==String(x)
};