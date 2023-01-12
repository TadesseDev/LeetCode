# @param {Integer} target
# @param {Integer[]} nums
# @return {Integer}
def min_sub_array_len(target, nums)
    window,sum,i,minLength=0,0,0,0
    while i<nums.length
        sum+=nums[i]
        if sum>=target 
            windowSize=i-window+1;
            minLength=windowSize if windowSize<minLength || minLength==0
            sum-=nums[window]
            sum-=nums[i]
            window+=1
            next;
        end
        i+=1
    end
    minLength
end