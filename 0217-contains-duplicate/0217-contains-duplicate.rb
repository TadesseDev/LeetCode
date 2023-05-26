# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    # hash=Set.new
    nums.sort!
    nums.each_with_index do |n,index|
        return true if n==nums[index+1]
    end
    return false
end