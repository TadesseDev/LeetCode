# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
    nums.sort!
    diff=((nums[0]+nums[1]+nums[2])-target).abs
    close_sum=(nums[0]+nums[1]+nums[2])
    for i in 0..nums.length-3
        next if i>0&&nums[i]==nums[i-1]
        j,k=i+1,nums.length-1
        while j<k
            return close_sum if diff==0
            sum=nums[i]+nums[j]+nums[k]
                if j!=i+1&&nums[j]==nums[j-1]
                    j+=1
                    next
                end
                if k!=nums.length-1&&nums[k]==nums[k+1]
                    k-=1
                    next
                end
            new_diff=(sum-target).abs
             if new_diff<diff
                 diff=new_diff
                 close_sum=sum
             end
            if sum<target
                j+=1
            else 
                k-=1
            end
        end
    end
    close_sum
end