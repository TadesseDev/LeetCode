/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pair={')':'(',']':'[','}':'{'}
    let store=[];
for (let i=0;i<s.length;i++){
    let ele=s.charAt(i);
    if(pair[ele]){
        if(store.length<1)
            return false;
        if(store[store.length-1]!=pair[ele])
            return false;
        store.pop();
    }
    else
        store.push(ele)
}
    return store.length==0
};