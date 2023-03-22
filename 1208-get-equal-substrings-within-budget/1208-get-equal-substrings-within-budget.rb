# @param {String} s
# @param {String} t
# @param {Integer} max_cost
# @return {Integer}
def equal_substring(s, t, max_cost)
     length=i=j=0
    while i<s.length 
        max_cost-=(s[i].ord-t[i].ord).abs
        if max_cost<0
            max_cost+=(s[j].ord-t[j].ord).abs
            j+=1
        else
            length=i-j+1 
        end
        i+=1
    end
    length
end