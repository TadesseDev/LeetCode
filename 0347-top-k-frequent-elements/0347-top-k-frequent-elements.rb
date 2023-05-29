# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def top_k_frequent(nums, k)
    hash={}
    nums.each do |num|
        hash[num]=hash[num] ? hash[num]+1 : 1
    end
    return hash.sort_by {|key,ele| ele*-1}.slice(0,k).map {|ele| ele[0]}
    
    # store=[]
    # res.each do |val|
    #     # p [val, hash.key(val)]
    #     store.push(hash.key(val))
    # end
    # p hash.values
    # # p hash
    # p store
end