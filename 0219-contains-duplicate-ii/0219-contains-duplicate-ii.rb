# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def contains_nearby_duplicate(nums, k)
    hash={}
    window=nums.slice(0,k)
    for i in 0..window.length-1
        if hash[window[i]]
            return true;
        else
            hash[window[i]]=window[i]
        end
    end
    for i in k..nums.length-1
        if hash[nums[i]]
            return true;
        else
            hash[nums[i]]=nums[i]
            hash[nums[i-k]]=nil
        end
    end
    false
end