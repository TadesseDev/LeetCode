# @param {Integer} n
# @return {String}
def count_and_say(n)
   return "1" if n==1 
    res= count_and_say(n-1)
    str=""
    count=0
    char=res[0]
    i=0
    while i<res.length do 
        if char==res[i]
            count+=1
        else
            str+=count.to_s+char
            char=res[i]            
            count=1
        end
        i+=1
    end
    str+=count.to_s+char
    return str
end