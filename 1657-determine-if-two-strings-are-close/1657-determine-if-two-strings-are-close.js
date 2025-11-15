/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    /*
    cabbba
    abbccc
    - c1a2b2
    - a1b1c3
    */

    if(word1.length!=word2.length)
    return false 

    let hash1 = new Map();
    let hash2 = new Map();

    for(let i=0;i<word1.length;i++){
        let char1 = word1.charAt(i);
        let char2 = word2.charAt(i);

        hash1.set(char1, hash1.has(char1) ? hash1.get(char1)+1 : 1)
        hash2.set(char2, hash2.has(char2) ? hash2.get(char2)+1 : 1)
    }
const val1 = Array.from(hash1.values()).sort((a,b)=>a-b)
const val2 = Array.from(hash2.values()).sort((a,b)=>a-b)
const key1 = Array.from(hash1.keys()).sort((a,b)=>a-b)
const key2 = Array.from(hash2.keys()).sort((a,b)=>a-b)
console.log(hash1, hash2)
console.log(val1, val2)
i=0
    do{
        let frequence1 = val1[i];
        let frequence2 = val2[i];
        console.log(frequence1,frequence2)
        if(frequence1!=frequence2 || !hash1.has(key2[i]) || !hash2.has(key1[i]))
        return false
        i++
    }while(i<val1.length);
    return true
};