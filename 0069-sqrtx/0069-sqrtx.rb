# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    return x if x<=1
   pow=0
    i=0
    while pow<=x
        i+=1
        pow=i*i
    end
    i-=1 
end