# @param {Integer[]} stones
# @return {Integer}
def last_stone_weight(stones)
    def two_max(arr)
        i=0
        k=0
        while k<arr.length
            i=k if arr[i]<arr[k]
            k+=1
        end
        j=i!=0 ? 0:i+1
        k=0
        while k<arr.length
            if i==k
                k+=1
                next
            end
            j=k if arr[j]<arr[k]
            k+=1
        end
      [i,j]
    end
    while stones.length>1
        i,j=*two_max(stones)
        if stones[i]==stones[j]
        p stones[i]==stones[j]
            j-=1 if j>i
            stones.slice!(i)
            stones.slice!(j)
        elsif stones[i]<stones[j]
            stones[j]=stones[j]-stones[i]
            stones.slice!(i)
        else
            stones[i]=stones[i]-stones[j]
            stones.slice!(j)
        end
    end
    stones[0] || 0 
end
