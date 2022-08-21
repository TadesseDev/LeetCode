/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length<2)
        return strs[0];
    let common='';
    let len=strs[0].length;
    for(let l=0;l<len&&l<strs[1].length;l++){
        if(strs[0].charAt(l)!=strs[1].charAt(l))
            break;
            common+=strs[0].charAt(l);
    }
    if(common.length<1)
        return common
    strs[1]=common
    return longestCommonPrefix([...strs].splice(1))
};