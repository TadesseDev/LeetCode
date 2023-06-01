# @param {Integer[]} nums
# @return {Integer}
def longest_consecutive(nums)
    return 0 if nums.length<1
    nums.sort!
    count=1
    max_count=1
    for i in 1..nums.length-1
        if nums[i]==nums[i-1]
            next;
        elsif nums[i]!=nums[i-1]+1
            max_count=count if count>max_count
            count=0
        end
        count+=1
    end
    max_count=count if count>max_count
    max_count
end