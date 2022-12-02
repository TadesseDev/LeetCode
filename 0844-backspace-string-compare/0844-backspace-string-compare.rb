# @param {String} s
# @param {String} t
# @return {Boolean}
def backspace_compare(s, t)
    i=0
    while i<s.length
        if s[i]=="#" 
            if i>0
                s.slice!(i-1,2) 
                i=-2
            else
            s[0]="" if i==0
                i=-1
            end
        end
        i+=1
    end 
    i=0
    while i<t.length
        if t[i]=="#" 
            if i>0
                t.slice!(i-1,2) 
                i=-2
            else
            t[0]="" if i==0
                i=-1
            end
        end
        i+=1
    end 
    return s==t
end