# @param {Integer[]} nums
# @param {Integer} goal
# @return {Integer}
def num_subarrays_with_sum(nums, goal)
    presum,ans=0,0
    i=0
			store={}
			while i<nums.length
                n=nums[i]
				if store[presum] #count all presum and store it
                    store[presum]+=1 
                else
                    store[presum]=1
                end
                    presum+=n
				if store[presum-goal]           #check if subarray is available in the store
					ans+=store[presum-goal]      
                end
                i+=1
            end
			 ans
end