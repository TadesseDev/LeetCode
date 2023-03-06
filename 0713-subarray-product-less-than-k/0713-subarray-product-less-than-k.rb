# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def num_subarray_product_less_than_k(nums, k)
    j,sum,count=0,1,0
    i=0
    while i<nums.length
        if nums[i]<k
            sum*=nums[i]
            temp=sum
            while sum>=k
                sum/=nums[j]
                j+=1
            end
            count+=i-j+1
        else
            sum=1
            j=i+1
        end
        i+=1
    end
    count
end