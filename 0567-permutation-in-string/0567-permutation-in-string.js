/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map=new Map();
    for(let ch of s1){
        if(map.get(ch))
            map.set(ch, map.get(ch)+1)
        else
            map.set(ch, 1)
    };
    
    let i=0
    while(i<s2.length){
        if(map.has(s2[i])){
            let j=i
            let tempMap=new Map(map)
            while(j<s2.length&&tempMap.has(s2[j])&&tempMap.get(s2[j])>0){
                tempMap.set(s2[j], tempMap.get(s2[j])-1)
                j+=1
            }
            // console.log(tempMap)
            if((j-i)==s1.length)
                return true
        }
        i+=1
    }
    return false
};