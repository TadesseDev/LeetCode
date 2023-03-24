# @param {String} s
# @return {Integer}
def balanced_string(s)
    base=s.length/4
    hash={'Q'=> 0, 'W'=> 0, 'E'=> 0, 'R'=> 0}
    exced_hash={}
    i=count=0
    while i<s.length
        hash[s[i]]+=1
         if  hash[s[i]]>base
             count+=1
             exced_hash[s[i]] =exced_hash[s[i]] ? exced_hash[s[i]]+=1 : 1
         end
        i+=1
    end
    return 0 if count==0
    window=s.length
    ini_count=count
    i=0
    index=[]
    while i<s.length 
        if exced_hash[s[i]]
            exced_hash[s[i]]-=1
            index.push(i)
            count-=1 if exced_hash[s[i]]>=0
        end
        if count==0
            while exced_hash[s[index[0]]]<0
                exced_hash[s[index[0]]]+=1
                index.shift
            end
            if i-index[0]+1<window
                all=true
                exced_hash.keys.each do |key|
                    if exced_hash[key]>0
                        all=false
                        break
                    end
                end
            window=i-index[0]+1 if all
            end
            ele=index.shift
            exced_hash[s[ele]]+=1
            count+=1 
        end
        i+=1
    end
    window
end