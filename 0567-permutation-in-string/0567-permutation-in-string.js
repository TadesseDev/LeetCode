/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map={};
    for(let ch of s1){
        if(map[ch])
            map[ch]=map[ch]+1
        else
            map[ch]=1
    };
    
    let i=0
    while(i<s2.length){
        if([s2[i]]){
            let j=i
            let tempMap={...map}
            while(j<s2.length&&tempMap[s2[j]]){
                tempMap[s2[j]]-=1
                j+=1
            }
            if((j-i)==s1.length)
                return true
        }
        i+=1
    }
    return false
};