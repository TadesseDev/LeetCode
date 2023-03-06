# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def num_subarray_product_less_than_k(nums, k)
    window,sum,count=[],1,0
    i=0
    while i<nums.length
        if nums[i]<k
            window.push(nums[i])
            sum*=nums[i]
            while sum>=k
                shift=window.shift
                sum/=shift
            end
            count+=window.length
        else
            sum=1
            window=[]
        end
        i+=1
    end
    count
end