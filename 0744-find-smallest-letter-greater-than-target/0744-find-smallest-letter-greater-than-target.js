/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let i=0
    let targetCharCode=target.charCodeAt()
    while(i<letters.length && targetCharCode>=letters[i].charCodeAt()){
        i+=1
    }
        // console.log(i)
    
   return  i==letters.length ? letters[0] : letters[i]
};
