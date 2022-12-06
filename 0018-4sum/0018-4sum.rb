# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[][]}
def four_sum(nums, target)
    result=[]
    nums.sort!
    for i in 0..nums.length-4
        next if i>0&&nums[i]==nums[i-1]
        for j in i+1..nums.length-3
            next if j>i+1&&nums[j]==nums[j-1]
            n,m=j+1,nums.length-1
            while n<m do
                if n>j+1&&nums[n]==nums[n-1]
                    n+=1
                    next
                end
                if m<nums.length-1&&nums[m]==nums[m+1]
                    m-=1
                    next
                end
                sum=nums[i]+nums[j]+nums[n]+nums[m]
                if sum==target
                    result.push([nums[i],nums[j],nums[n],nums[m]])
                    n+=1
                elsif sum>target
                    m-=1
                else
                    n+=1
                end
            end
        end
    end
    result
end