/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hash={'{': '}','[': ']','(': ')'}
    const stack=[]
    for(let char of s){
        if(hash[char])
            stack.push(char)
        else
            if(hash[stack.pop()]==char)
                continue;
            else
                return false

    }
    return stack.length==0
};