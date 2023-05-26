# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    return false if s.length != t.length
    s_hash={}
    # t_hash={}
    s.each_char do |n|
        if s_hash[n]
            s_hash[n]+=1
        else
            s_hash[n]=1
        end
    end
    t.each_char do |n|
        return false if s_hash[n].nil? || s_hash[n]<=0
        s_hash[n]-=1
    end
    return true
end