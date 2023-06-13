/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<2)
        return s.length 
    /*
    "abcabcbb"
    max=3
    l=0
    r=4
    hash{a: 3, b: 1, c: 2}
    */
    let hash=new Map([[s[0],0]])
    let max=0
    let l=0,r=1
    while(r<s.length){ //1<8 //2<8 //3<8
        if(hash.get(s[r])||hash.get(s[r])===0){ // null||false //null||false //0||0==0
            // console.log(s[r])
            let temp=l //0
            l=hash.get(s[r])+1 //1
            while(temp<l){
                hash.set(s[temp],false) // 
                temp+=1 // 1
            }
            // console.log(hash)
        }
        // console.log(l,r)
        hash.set(s[r],r) // set b // set c
        if((r-l+1)>max) // true
            max=r-l+1
        r+=1
    }
    return max
};