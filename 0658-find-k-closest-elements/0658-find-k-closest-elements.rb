# @param {Integer[]} arr
# @param {Integer} k
# @param {Integer} x
# @return {Integer[]}
def find_closest_elements(arr, k, x)
    j=k-1
    i=k
    while i<arr.length
        if (x-arr[i]).abs <= (x-arr[(j-k)+1]).abs
            if (x-arr[i]).abs < (x-arr[(j-k)+1]).abs
                p arr[i],arr[j-k]
                j=i
            end
        else 
            return arr.slice(j-k+1,k) 
        end
        i+=1
    end
    arr.slice(j-k+1,k) 
end