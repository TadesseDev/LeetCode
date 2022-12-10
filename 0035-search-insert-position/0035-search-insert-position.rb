# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    return 0 if nums[0]>=target
    def logn(nums, target)
       if nums.length<2
            return [nums[0],nums[0]>=target ? 0:1]
       end
        mid=nums.length/2
        if nums[mid]==target
            return [nums[mid], 0]
        elsif target<nums[mid]
            return logn(nums.slice(0,mid),target)
        else
                slice=nums.slice(mid+1, nums.length)
                return [nums[mid], 1] if slice.empty?
             return logn(nums.slice(mid+1, nums.length),target)
        end
    end
    result=logn(nums, target)
    nums.index(result[0])+result[1]
end