# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
 
    nums.sort!
    output=[]
    for i in 0..nums.length-3
        next if i>0&&nums[i-1]==nums[i]
        j,k=i+1,nums.length-1
        while j<k
            if j-1!=i&&nums[j-1]==nums[j]
                j+=1
                next
            end
            if k+1<nums.length&&nums[k+1]==nums[k]
                k-=1
                next
            end
            sum=nums[i]+nums[j]+nums[k]
            if sum==0
                output.push([nums[i],nums[j],nums[k]])
                j+=1
            elsif sum>0
                k-=1
            else
                j+=1
            end
        end
    end
        output
end