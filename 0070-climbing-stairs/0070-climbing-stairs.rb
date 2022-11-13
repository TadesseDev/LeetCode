# @param {Integer} n
# @return {Integer}
@solved=[0]
@value=[1]
def climb_stairs(n)
    return 0 if n<1
    # return n if n<2
    sum=0
    if @solved.include?(n-1)
        index=@solved.index(n-1)
        sum+=@value[index]
    else
        res=climb_stairs(n-1)
        if res !=0
            sum+=res
        end
    end
    if @solved.include?(n-2)
        index=@solved.index(n-2)
        sum+=@value[index]
    else
        res=climb_stairs(n-2)
        if res !=0
            sum+=res
        end
    end
            @solved.push(n)
            @value.push(sum)
    return sum
end