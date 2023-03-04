# @param {String} s1
# @param {String} s2
# @return {Boolean}
def check_inclusion(s1, s2)
    hash={}
    
    return false if s1.length > s2.length
    # store s1 chars into a hash
    s1.each_char do |char|
        if hash[char]
            hash[char]+=1
        else
            hash[char]=1
        end
    end
    # Check for permutuation with O(n)
    temp_hash={**hash}
    window=[]
    s2.each_char do |char|
        if temp_hash[char] 
            if  temp_hash[char]==0
                sliced_out=window.slice!(0, window.index(char)+1)
                sliced_out.each do |ch|
                   temp_hash[ch]+=1 
                end
            end
            window.push(char)
            temp_hash[char]-=1
            return true if window.length==s1.length
        else
            temp_hash={**hash}
            window=[]
        end
    end
    false
end