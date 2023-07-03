/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let hash={}
    let win=null
    t.split("").forEach(ch=>{
        hash[ch]=hash[ch]? hash[ch]+1 : 1
    });
    let j=0,i=0,sum=Object.keys(hash).length
    while(i<s.length){
        let ch=s[i]
        if(typeof hash[ch]== 'number' ){
            hash[ch]-=1
            sum=hash[ch]==0 ? sum-1 : sum
        }
        
        if(sum==0){
            if(!win||win.length>s.slice(j,i+1).length)
                win=s.slice(j,i+1)
            while(j<=i){
                ch=s[j]
                     if(typeof hash[ch]=='number'){
                        hash[ch]+=1
                        sum=hash[ch]>0 ? sum+1 : sum
                    } 
                if(sum>1){ 
                    hash[ch]-=1
                    sum-=1
                    break;
                }else if(sum==0&&win.length>s.slice(j+1,i+1).length){
                            win=s.slice(j+1,i+1)
                        }
                j+=1
            }
        }
        i+=1
    }
    
    return !win ? "" : win
};