# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
    return [nums] if nums.length<2
     perm=[]
        next_num=nums[1..nums.length]
        num=nums[0]
        res=permute(next_num)
        res.each do |arr|
            arr.unshift(num)
        end
        perm.push(*res)
        i=1
    while i<nums.length do
        
        next_num=nums[0..i-1] + nums[i+1..nums.length]
        num=nums[i]
        
        res=permute(next_num)
        res.each do |arr|
            arr.unshift(num)
        end
        perm.push(*res)
        i+=1
    end 
    perm
end