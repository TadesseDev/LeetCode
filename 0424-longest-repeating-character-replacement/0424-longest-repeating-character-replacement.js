/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    /*
        ABABCEF
        i=6,j=2,{A: 1, B: 1, C: 1, E: 1,F: 1}
            sum=0,max=0
    */
     let i=0,j=0,hash={}, result=0
    while(i<s.length){
        let sum=0, max=0
        if(hash[s[i]])
            hash[s[i]]+=1
        else
            hash[s[i]]=1
        Object.keys(hash).forEach(key=>{
            sum+=hash[key]
            if(hash[key]>max)
                max=hash[key]
        })
        
        if((sum-max)>k){
            hash[s[j]]-=1
            sum-=1
            j+=1
        }
        if(sum>result)
            result=sum
        i+=1
    }
    return result
};