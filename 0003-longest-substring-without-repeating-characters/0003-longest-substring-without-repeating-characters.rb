# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
    start=0
    end_ele=0
    result=''
    for i in 0..s.length-1
        new_str=s[start, end_ele-start]||''
        while end_ele<s.length && !new_str.include?(s[end_ele])
            new_str.insert(-1,s[end_ele])
            end_ele+=1
        end
        result = new_str if new_str.length > result.length
        i=end_ele
        start=s.index(s[end_ele], start)+1 if s[end_ele]
    end
    result.length
end