# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    hash=Set.new
    nums.each do |n|
        return true if hash.include?(n)
        hash<<n
    end
    return false
end