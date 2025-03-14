function gcdOfStrings(str1: string, str2: string): string {
    /*
    1. find the window by continuesly looping through as long as we have a match 
    2. as long as window size is more than one 
        1.1 set match string as false
        1.1 set a window value in the variable
        2.2 while match is true loop through the arrays 
            1. if length>i  match
                continue
            2. if not 
                exit setting match false 
            3. if(match)
                return window VAlue 
        return '
    */

    let window = 0;
    let i=0;
    while(i<str1.length){
        if(str1[i]!=str2[i])
            break 
        window++;
        i++;
    }
    while(window>0){
        let match = true;
        const windowSring = str1.slice(0, window)
        i=0
        while(i<str1.length || i<str2.length){
            if(i<str1.length){
                if(windowSring!=str1.slice(i,i+window)){
                    match=false
                    break
                }
                    
            }
            if(i<str2.length){
                if(windowSring!=str2.slice(i,i+window)){
                    match=false
                    break
                }
            }
           i+=window
        } 
        window--
        if(match)
            return windowSring
        
    }
    return ''
};