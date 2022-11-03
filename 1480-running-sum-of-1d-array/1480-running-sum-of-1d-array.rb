# @param {Integer[]} nums
# @return {Integer[]}
def running_sum(nums)
    for i in 1..nums.length-1
        nums[i]=nums[i]+nums[i-1]
    end
    nums
end