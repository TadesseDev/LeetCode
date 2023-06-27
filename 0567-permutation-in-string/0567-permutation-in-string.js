/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map1={},map2={}, match=0;
    for(let ch of s1){
        if(map1[ch])
            map1[ch]+=1
        else
            map1[ch]=1
    };

    for(let i=0;i<s1.length;i+=1){
        let ch=s2[i]
        if(map2[ch])
            map2[ch]+=1
        else
            map2[ch]=1
    };
    
    let keyLen=Object.keys(map1).length
    Object.keys(map2).forEach((key)=>{
        if(map1[key]===map2[key])
            match+=1
    })
    if(match==keyLen)
        return true
    
    
    let i=s1.length,j=0
    while(i<s2.length){
        // console.log(map2, match, i)
        
        let ch=s2[i]
        if(map1.hasOwnProperty(ch)&&map1[ch]===map2[ch])
            match-=1
        
        if(map2[ch])
            map2[ch]+=1
        else
            map2[ch]=1
        
    if(map1[ch]==map2[ch])
        match+=1
        
    if(map1[s2[j]]===map2[s2[j]])
        match-=1
    map2[s2[j]]-=1
    if(map1[s2[j]]===map2[s2[j]])
        match+=1
    if(match==keyLen)
        return true
        
        
        // console.log(map2, match, i, map1[ch], map2[ch])
        i+=1
        j+=1
    }
    
    return false
};