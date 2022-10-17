# @param {Integer} x
# @return {Integer}
def reverse(x)
    max_num=2147483647
    res=x.to_s.split("").reverse().join("")
    res.slice!(-1) if x < 0
    res=res.to_i
    return 0 if res > max_num
    return res*-1 if x < 0
    res
end