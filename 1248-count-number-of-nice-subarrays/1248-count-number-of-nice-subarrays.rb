# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def number_of_subarrays(nums, k)
    count=i=j=0
    ini=k
    while i+k<=nums.length 
        k-=1 if nums[i]%2!=0
        if k==0
            c=0
            c2=0
            temp=j
            k+=1
            while j<=i && nums[j]%2==0
                c+=1
                j+=1
            end
            j+=1 
            tempi=i+1
            while tempi < nums.length && nums[tempi]%2==0
                c2+=1
                tempi+=1
            end
            count+=(c>0 ? c+1 : 1) * (c2>0 ? c2+1 : 1)
            # p [c,c2,count,k]
        end
        i+=1
    end
    count
end