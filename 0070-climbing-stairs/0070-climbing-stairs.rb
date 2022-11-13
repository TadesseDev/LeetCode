# @param {Integer} n
# @return {Integer}
@solved=[0]
@value=[1]
def climb_stairs(n)
    return 0 if n<1
    sum=0
    
        sum+=@value[@solved.index(n-1)] if @solved.include?(n-1)
        sum+=climb_stairs(n-1) unless @solved.include?(n-1)
       
        sum+=@value[@solved.index(n-2)]  if @solved.include?(n-2)
        sum+=climb_stairs(n-2) unless @solved.include?(n-2)
    
            @solved.push(n)
            @value.push(sum)
    return sum
end