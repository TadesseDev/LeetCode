# @param {String} s
# @return {String}
def longest_palindrome(s)
    result=''
    i=0
    while i < s.length
        start=i
        last=i
        while s[start]==s[last] && start >=0 && last < s.length
            start-=1
            last+=1
        end
        result=s[start+1..last-1] if s[start+1..last-1].length > result.length
        if s[i]==s[i+1]
            start=i
            last=i+1 
            while s[start]==s[last] && start >=0 && last < s.length
                start-=1
                last+=1
            end
            result=s[start+1..last-1] if s[start+1..last-1].length > result.length
        end
        i+=1
    end
    result
end