# @param {Integer[]} nums
# @param {Integer} limit
# @return {Integer}
def longest_subarray(nums, limit)
    i=j=0
    count=0
    min=max=0
    while i<nums.length
        min=i if nums[i]<nums[min]
        max=i if nums[i]>nums[max]
        while nums[max]-nums[min] >limit
            j=max<min ? max : min
            while j<i && (nums[i]-nums[j]).abs > limit
                j+=1
            end
        # p [min, max, j, i]
            min=nums.slice(j..i).index(nums.slice(j..i).min)+j
            max=nums.slice(j..i).index(nums.slice(j..i).max)+j
        end
        # p [min, max]
        count = i-j+1 if i-j+1 > count
        i+=1
    end 
    count
end