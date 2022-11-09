# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(numsx, targetx)
    @nums=numsx
    def searchrec nums, target
        return -1 if nums.empty? || nums.length<2&&nums[0]!=target
        index=nums.length/2
        if nums[index]==target
            return @nums.index(target)
        elsif nums[index]<target
            p nums[index]
            return searchrec(nums[index+1..nums.length-1], target)
        else
            p nums[index]
            return searchrec(nums[0..index-1], target)
        end
    end
    return searchrec numsx, targetx
end