/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let arr = []
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)!="*"){
            arr.push(s.charAt(i))
        }else{
            arr.pop()
        }
    }
    return arr.join("")
};