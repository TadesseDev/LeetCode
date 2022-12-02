# @param {String} s
# @return {String}
def decode_string(s)
    return "" if s.empty?
     if s[0].match?(/[0-9]/)
         start=0
         while s[start].match?(/[0-9]/)
             start+=1
         end
         start-=1
         number=s[0..start].to_i
         newStr=start+2
         stack=1
         while stack!=0
             if s[newStr]=="]"
                 stack-=1
             elsif s[newStr]=="["
                 stack+=1
             end
             newStr+=1
         end
         return p (decode_string(s[start+1..newStr-1]) * number) + decode_string(s[newStr, s.length])
    elsif s[0].match?(/[a-zA-Z]/)
          start=0
         while start < s.length && s[start].match?(/[a-zA-Z]/)
             start+=1
         end
         start-=1
         return s[0..start]+decode_string(s[start+1, s.length])
     else 
         return decode_string(s[1, s.length])
     end
end