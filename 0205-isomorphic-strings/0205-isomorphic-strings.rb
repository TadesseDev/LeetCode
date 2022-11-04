# @param {String} s
# @param {String} t
# @return {Boolean}
def is_isomorphic(s, t)
    arr_t=[]
    arr_s=[]
    for i in 0..s.length-1
        if arr_s.include?(s[i]) 
            index=arr_s.index(s[i])
            return false if arr_t[index]!=t[i]
        elsif arr_t.include?(t[i]) 
            return false
        else 
            arr_s.push(s[i])
            arr_t.push(t[i])
        end
    end
    true
end