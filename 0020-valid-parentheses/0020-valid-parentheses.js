/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hash={'{': '}','[': ']','(': ')'}
    const stack=[]
    for(let char of s){
        if(hash[char]){
            stack.push(char)
        }
        else{
            // console.log(stack.pop(), stack, char)
            if(hash[stack.pop()]==char){
                continue;
        }
            else {
                return false
            }
        }
    }
        // console.log(stack, char)
    return stack.length==0
};