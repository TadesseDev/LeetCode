# @param {Integer[]} nums
# @param {Integer} k
# @return {Float}
def find_max_average(nums, k)
    sum=nums.slice(0,k).sum
    avg=sum.to_f/k
    for i in k..nums.length-1
        sum-=nums[i-k]
        sum+=nums[i]
         if sum/k.to_f>avg
             avg=sum.to_f/k
         end
    end
    avg
end