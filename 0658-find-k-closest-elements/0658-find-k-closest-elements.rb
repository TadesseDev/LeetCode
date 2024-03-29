# @param {Integer[]} arr
# @param {Integer} k
# @param {Integer} x
# @return {Integer[]}
def find_closest_elements(arr, k, x)
    j=k-1
    i=k
    while i<arr.length
        if (x-arr[i]).abs < (x-arr[(j-k)+1]).abs
                j=i
        end
        return arr.slice(j-k+1,k) if (x-arr[i]).abs > (x-arr[(j-k)+1]).abs 
        i+=1
    end
    arr.slice(j-k+1,k) 
end