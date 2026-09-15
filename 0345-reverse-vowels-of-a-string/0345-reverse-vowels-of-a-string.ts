function reverseVowels(s: string): string {
    const set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const strArr = s.split("");
    for(let i=0, j=strArr.length-1; i<j;){
        if(set.has(strArr[i]) && set.has(strArr[j])){
            [strArr[i], strArr[j]] = [strArr[j], strArr[i]]
            i++
            j--
        }else if(set.has(strArr[i])){
            j--
        }else if(set.has(strArr[j])){
            i++
        }else{
            j--
            i++
        }
    }

   return strArr.join("");
};