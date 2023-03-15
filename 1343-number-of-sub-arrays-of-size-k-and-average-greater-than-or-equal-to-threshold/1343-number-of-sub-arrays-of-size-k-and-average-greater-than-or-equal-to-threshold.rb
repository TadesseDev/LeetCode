# @param {Integer[]} arr
# @param {Integer} k
# @param {Integer} threshold
# @return {Integer}
def num_of_subarrays(arr, k, threshold)
    count,j=0,k
    sum=arr.slice(0,k).sum.to_f
    count+=1 if sum/k>=threshold
    while j<arr.length
        sum-=arr[j-k]
        sum+=arr[j]
        count+=1 if sum/k>=threshold
        j+=1
    end
    count
end