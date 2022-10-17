# @param {String} s
# @return {Integer}
def my_atoi(s)
    x=s.to_i 
    return 2147483647 if x.to_i >2147483647
    return -2147483648 if x.to_i < -2147483647
    x
end