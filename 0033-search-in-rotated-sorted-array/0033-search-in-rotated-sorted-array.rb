# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    start_i,end_i=0,nums.length-1
    
    
=begin
    nums = [4,5,6,7,0,1,2], target = 1
    start_i=0
    end_i=1
    while 
        mid=2
=end
    # target=target
    mid=0
    while start_i<=end_i # 0<1
        mid=(start_i+end_i)/2 # (0+1):2 | 0
        return mid if nums[mid]==target #nums[0] == 1 | false;
        # if left side is sorted
        if nums[start_i] < nums[mid] # nums[0] < nums[0] | false;
            #if element exist on left side
            if target >= nums[start_i] && target<nums[mid] # 0 >= nums[4] && 0<nums[5] | false; true;
                end_i=mid-1 # 4
            else
                start_i=mid+1 # 4
            end
        # if right side is sorted
        else
            if target>nums[mid] && target<=nums[end_i]# 4 > nums[2] && target< 
                start_i=mid+1
            else
                end_i=mid-1
            end
        end
    end
        return nums[mid+1]==target ? mid+1 : -1; 
end