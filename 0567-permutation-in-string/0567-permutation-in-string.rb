# @param {String} s1
# @param {String} s2
# @return {Boolean}
def check_inclusion(s1, s2)
    hash={}
    # count=s1.length
    # @s2=s2
    return false if s1.length > s2.length
    # store s1 chars into a hash
    s1.each_char do |char|
        if hash[char]
            hash[char]+=1
        else
            hash[char]=1
        end
    end
    
#     def recursive_check(position, hash)
#         if hash[@s2[position]] && hash[@s2[position]]>0
#             @count-=1
#             return true if @count==0
#             hash[@s2[position]]-=1
#             ret=recursive_check(position+1, hash)
#             @count+=1
#             hash[@s2[position]]+=1 if hash[@s2[position]]
#             return ret
#         else 
#             return position
#         end
#     end
    
#     i=0
#     while i<s2.length
#          if hash[s2[i]]
#             ret= recursive_check(i, {**hash})
#              return true if ret.class !=Integer
#              i=ret
#          else
#             i+=1
#          end
#     end
#     false
    
    
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