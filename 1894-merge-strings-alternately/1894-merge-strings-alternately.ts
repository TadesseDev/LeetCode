function mergeAlternately(word1: string, word2: string): string {
const minLength = word1.length < word2.length ? word1.length : word2.length

let result = ''
for(let i=0; i<minLength; i++){
    result +=word1[i] +word2[i]
}
result += word1.slice(minLength, word1.length) + word2.slice(minLength, word2.length)
return result
};
