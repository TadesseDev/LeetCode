# @param {String} s
# @return {Integer}
def longest_palindrome(s)
    s=s.chars.sort
    counter=1
    mod=0
    flag=false
    for i in 1..s.length-1
         if s[i]==s[i-1]
             counter+=1
         else
             flag=true if counter%2!=0
             mod+=(counter/2)*2
             counter=1
         end
    end
     flag=true if counter%2!=0
     mod+=(counter/2)*2
        
    mod+=1 if flag
    mod
end