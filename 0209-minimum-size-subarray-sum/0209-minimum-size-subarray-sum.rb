# @param {Integer} target
# @param {Integer[]} nums
# @return {Integer}
def min_sub_array_len(target, nums)
    window,sum,i,minLength=[0,0],0,0,0
    while i<nums.length
        sum+=nums[i]
        window[1]=i
        if sum>=target 
            windowSize=window[1]-window[0]+1;
            minLength=windowSize if windowSize<minLength || minLength==0
            sum-=nums[window[0]]
            sum-=nums[i]
            window[0]+=1
            next;
        end
        i+=1
    end
    minLength
end