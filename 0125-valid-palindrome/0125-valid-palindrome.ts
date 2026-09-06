function isPalindrome(s: string): boolean {
    const regx = /[a-zA-Z0-9]/
    for(let i=0,j=s.length-1; i<j; i++,j--){

        while(i<s.length && !regx.test(s[i]))
            i++

        while(j>=0 && !regx.test(s[j]))
            j--
        
        if(s[i]?.toLowerCase() != s[j]?.toLowerCase())
            return false
    }

    return true;
};