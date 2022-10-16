# @param {String} s
# @return {String}
def shortest_palindrome(s)
    i=s.length/2
    index=0
    while i>0 
         if s.length > i*2 && s[0..i] == s[i..2*i]&.reverse
             index = i*2 
             break
         end
        if s[0..i-1] == s[i..i*2-1]&.reverse
            index = i*2-1 
            break 
        end
        i-=1
    end
    s.prepend(s[index+1..s.length-1]&.reverse||'')
end