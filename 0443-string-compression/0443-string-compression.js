/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    /*
    * set counter = 0
    * set index=0 
    * for leep with i to iterate through all element
    * set count+=1
    * if(i==i+1)
        * continue;
    * else 
        * if(count<2)
            * count=0
            * index=i+1
        * else{
            * const res = count.toString().split("")
            * chars.splice(index+1, count-1, ...res)
            * i=index+res.length
            * index = i+1
            * count=0
        }

    [a,2,b,2,c,3]
    counter=3
    inde=6
    i=6
lnegth=7
res=[3]
    */
    let counter=0, index=0;
    for(let i=0;i<chars.length;i++){
        counter+=1

        if(i<chars.length-1 && chars[i]==chars[i+1])
            continue
        else{
            if(counter<2){
                counter=0;
                index=i+1
            }else{
                const res = String(counter).split("")
                chars.splice(index+1, counter-1, ...res)
                i=index+res.length
                counter=0
                index=i+1;
            }
        }

    }
    return chars.length
};