# @param {String} s
# @param {Integer} k
# @return {Integer}
def max_vowels(s, k)
    hash={'a'=>true, 'e'=>true, 'i'=>true, 'o'=>true, 'u'=>true}
    count=j=i=0
    max_count=0
    while i<s.length
        count+=1 if hash[s[i]]
        if i>=k
            count-=1 if hash[s[j]]
            j+=1
        end
        max_count=count if count>max_count
        i+=1
    end
    max_count
end