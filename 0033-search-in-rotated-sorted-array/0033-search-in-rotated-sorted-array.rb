# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    start_i, end_i = 0, nums.length - 1
    
    while start_i <= end_i
        mid = (start_i + end_i) / 2
        
        return mid if nums[mid] == target
        
        if nums[start_i] <= nums[mid]
            if target >= nums[start_i] && target < nums[mid]
                end_i = mid - 1
            else
                start_i = mid + 1
            end
        else
            if target > nums[mid] && target <= nums[end_i]
                start_i = mid + 1
            else
                end_i = mid - 1
            end
        end
    end
    
    return -1
end