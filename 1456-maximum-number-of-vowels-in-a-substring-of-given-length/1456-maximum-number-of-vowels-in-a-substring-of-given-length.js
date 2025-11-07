/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let count = 0
    const vowels = new Set(['a','e','i','o','u']);
    let i=0;
    while(i<k){
        if(vowels.has(s.charAt(i)))
            count++
        i++
    }

    let maxVowel = count;

    while(i<s.length && maxVowel<k){
        if(vowels.has(s.charAt(i)))
            count++
        if(vowels.has(s.charAt(i-k)))
            count--
        if(count>maxVowel)
           maxVowel = count 
        i++
    }
    return maxVowel
};