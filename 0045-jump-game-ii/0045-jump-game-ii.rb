# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
   def get_jump(nums, current_element, count)
       return count+1 if current_element+nums[current_element] >= nums.length-1
       jump=nums[current_element]
       max=jump+current_element
       next_element=current_element+1
       count+=1
       (next_element..current_element+jump).each do |i|
           
           if nums[i]+i > max
               next_element=i
               max=nums[i]+i 
               p max
               return count+1 if max >= nums.length-1
           end
       end
        get_jump(nums, next_element, count)
    end
    return 0 if nums.length<2
    get_jump(nums, 0, 0)
end