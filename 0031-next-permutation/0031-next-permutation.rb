def next_permutation(nums)
  n = nums.length
  i = n - 2

 
  while i >= 0 && nums[i] >= nums[i+1]
    i -= 1
  end

  if i >= 0
    j = n - 1
    while j > i && nums[j] <= nums[i]
      j -= 1
    end
    nums[i], nums[j] = nums[j], nums[i]
  end
  reverse(nums, i + 1, n - 1)

  nums
end

def reverse(nums, start, finish)
  while start < finish
    nums[start], nums[finish] = nums[finish], nums[start]
    start += 1
    finish -= 1
  end
end