# @param {Integer[]} height
# @return {Integer}
def max_area(height)
    res=0
    dif=height.length-1
    i=0
    while i<dif
            res=[res,[height[i],height[dif]].min*(dif-i)].max
        if height[i]<height[dif]
            i+=1
        else
            dif-=1
        end
    end
    res
end