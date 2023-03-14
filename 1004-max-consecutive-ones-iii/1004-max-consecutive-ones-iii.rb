# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def longest_ones(nums, k)
    zeros=[0]
    count=0
    shift=false
    nums.each_with_index do |ele, ind|
        if ele==0
            zeros.push(ind)
            if zeros.length>k+1
                shift=true
                zeros.shift 
            end
        end
         if shift
             new_count=ind-zeros[0]
         else
             new_count=ind+=1
         end
        count= new_count if new_count > count
    end
    count
end