# @param {Integer[]} nums
# @return {Integer}
def pivot_index(nums)
    left_sum=0
    right_sum=nums.reduce(:+)
    i=0
    while i<nums.length
        right_sum-=nums[i]
        return i if left_sum==right_sum
        left_sum+=nums[i]
        i+=1
    end
    return -1
end