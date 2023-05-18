# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
   def get_jump(nums, current_element)
       return [0] if current_element == nums.length-1
       
       ret=get_jump(nums, current_element+1)

       jump=nums[current_element]
       min=(nums.length-(current_element+jump))-1
       return ret.unshift(1) if min<=0
       
           i=0
            while i<jump && min>1
                min=ret[i] if ret[i]<min
                i+=1
           end
       
       ret.unshift(min+1)
    end
    get_jump(nums, 0)[0]
end