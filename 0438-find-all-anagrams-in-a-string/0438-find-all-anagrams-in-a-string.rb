# @param {String} s
# @param {String} p
# @return {Integer[]}
def find_anagrams(s, p)
    result=[]
    hash={}
    p.chars do |char|
        if hash[char.to_sym] 
            hash[char.to_sym]+=1
        else
            hash[char.to_sym]=1
        end
    end
    s[0..p.length-1].chars do |char|
        if hash[char.to_sym] 
            hash[char.to_sym]-=1
        else
            hash[char.to_sym]=-1
        end
    end
    result.push(0) unless hash.any? {|key, val| val!=0}
    k=p.length
    i=0
    while i+k < s.length
        if hash[s[i].to_sym] 
            hash[s[i].to_sym]+=1
        else
            hash[s[i].to_sym]=+1
        end
        if hash[s[i+k].to_sym] 
            hash[s[i+k].to_sym]-=1
        else
            hash[s[i+k].to_sym]=-1
        end
        result.push(i+1) unless hash.any? {|key, val| val!=0}
        i+=1
    end
    result
end