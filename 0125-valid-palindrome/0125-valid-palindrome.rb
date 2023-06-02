# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    s.downcase!
    i,j=0,s.length-1
    while i<j
        unless s[i].match(/[A-Za-z0-9]/)
            i+=1;
            next;
        end
        unless s[j].match(/[A-Za-z0-9]/)
            j-=1;
            next;
        end
        return false if s[i]!=s[j]
        j-=1
        i+=1
    end
    true
end