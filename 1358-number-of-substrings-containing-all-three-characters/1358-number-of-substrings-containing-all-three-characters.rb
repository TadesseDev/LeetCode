# @param {String} s
# @return {Integer}
def number_of_substrings(s)
   hash={"a"=>[0,0], "b"=>[0,0], "c"=>[0,0]}
   i=count=pre_sum=0
    
    while i<s.length 
        hash[s[i]] = [i, hash[s[i]][1]+1]
        
        if hash[s[i]][1]==1
            count+=1
        end
        if count==3
            small=i
            hash.keys.each do |key|
                small =hash[key][0] if  hash[key][0]<small
            end
            pre_sum+=small+1
        end
        i+=1
    end
    pre_sum
end