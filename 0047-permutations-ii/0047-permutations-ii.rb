# @param {Integer[]} nums
# @return {Integer[][]}
def permute_unique(nums)
    
    def unique(nums)
    return [[nums[0]]] if nums.length<2 / 1
    
    i=0
    store=[]
    while i<nums.length # 0<3 / 0<2
        while i<nums.length-1 && nums[i]==nums[i+1] do #true | i=1 / false / false
            i+=1
        end
        cur=nums[i]
        nex_nums=i>0 ? nums[0..i-1] : [] 
        nex_nums=nex_nums+nums[i+1..nums.length]
        res=unique(nex_nums)
        
        res.each do |arr|
            arr.unshift(cur)
        end
        store.push(*res)
        i+=1
    end
    store
end
    unique(nums.sort)
end
