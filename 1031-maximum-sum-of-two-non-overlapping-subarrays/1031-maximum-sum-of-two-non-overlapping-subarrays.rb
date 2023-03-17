# @param {Integer[]} nums
# @param {Integer} first_len
# @param {Integer} second_len
# @return {Integer}
def max_sum_two_no_overlap(nums, first_len, second_len)
    i=0
    max_sum=0
    while i+first_len+second_len <=nums.length
        sum=nums.slice(i,first_len).sum
        j=i+first_len
        while j+second_len<=nums.length
            new_sum=nums.slice(j,second_len).sum
            max_sum=sum+new_sum if sum+new_sum>max_sum
                    # p [sum, new_sum]
            j+=1
        end
        i+=1
    end
    i,j=0,0
    while i+first_len+second_len <=nums.length
        sum=nums.slice(i,second_len).sum
        j=i+second_len
        while j+first_len<=nums.length
            new_sum=nums.slice(j,first_len).sum
            max_sum=sum+new_sum if sum+new_sum>max_sum
                    # p [sum, new_sum]
            j+=1
        end
        i+=1
    end
    max_sum
end