# @param {Integer[]} arr
# @param {Integer} k
# @param {Integer} x
# @return {Integer[]}
def find_closest_elements(arr, k, x)
    window=arr.slice(0,k)
    i=k
    while i<arr.length
        if (x-arr[i]).abs <= (x-window[0]).abs
            if (x-arr[i]).abs < (x-window[0]).abs
                window.shift
                window.push(arr[i])
            end
        else 
            return window
        end
        i+=1
    end
    window
end