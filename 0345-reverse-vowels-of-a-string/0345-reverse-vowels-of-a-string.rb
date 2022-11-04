# @param {String} s
# @return {String}
def reverse_vowels(s)
    vowel=['a','e','i','o','u']
    vowels_indx=[]
    for i in 0..s.length-1
        vowels_indx.push(i) if vowel.include?(s[i].downcase)
    end
    i=0
    j=vowels_indx.length-1
    while i<j
        s[vowels_indx[i]],s[vowels_indx[j]] = s[vowels_indx[j]],s[vowels_indx[i]]
        i+=1
        j-=1
    end
    s
end