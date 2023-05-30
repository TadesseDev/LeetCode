# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
    product=nums.reduce(:*)
    # product=nums.reduce {|pro,num| num*pro}
    pro_array=Array.new(nums.length).fill(0)
    if product==0
        # product=1
        zeros=0
        product=nums.reduce(1) do |pro, num|
            if num==0
               zeros+=1
                break if zeros>1
            else
                pro*=num
            end
            pro
        end
        return pro_array if zeros>1
        pro_array[nums.index(0)]=product
    else
        nums.each_with_index {|num,index| pro_array[index]=product/num}
    end
    pro_array
end