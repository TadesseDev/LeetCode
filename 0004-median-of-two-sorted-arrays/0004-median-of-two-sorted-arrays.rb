# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
    i=0
    j=0
    while i < nums1.length
        break if j >= nums2.length
        while i < nums1.length && nums2[j] > nums1[i]
            i+=1
        end
        nums1.insert(i,nums2[j])
        j+=1
        i+=1
    end
    nums1.insert(-1, *nums2[j, nums2.length]) if j < nums2.length
    # p nums1
    if (nums1.length%2)!=0
        return nums1[nums1.length/2]
    else
        p nums1.length/2
        return (nums1[nums1.length/2]+nums1[(nums1.length-2)/2]).to_f/2
    end
end