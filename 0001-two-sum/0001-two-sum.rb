# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    hash={}
    for i in 0..nums.length-1
        nedeed=target-nums[i]
        return [hash[nedeed], i] if hash[nedeed]
        hash[nums[i]]=i
    end
end