# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
    sorted=[]
    hash={}
    strs.each do |str|
        sorted.push(str.chars.sort.join())
    end
    
    sorted.each_with_index do |str,index|
        if hash[str]
            hash[str].push(strs[index])
        else
            hash[str]=[strs[index]]
        end
    end
    result=[]
    hash.each {|key, val| result.push(val)}
    result
end