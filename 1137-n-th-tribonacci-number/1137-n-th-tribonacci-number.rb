# @param {Integer} n
# @return {Integer}
def tribonacci(n)
    arr=[0,1,1,2]
    for i in 4..n do
        three=arr[3]
        arr[3]=arr[1]+arr[2]+arr[3]
        arr[0]=arr[1]
        arr[1]=arr[2]
        arr[2]=three
    end
    return arr[n] if n<3
    return arr.slice(0,3).sum
end