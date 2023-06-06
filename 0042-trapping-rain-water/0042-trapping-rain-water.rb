# @param {Integer[]} height
# @return {Integer}
def trap(height)
=begin
height = [5,4,1,2]
    right=3
    left=0
    small=2
    sum=0
=end
    right=0
    left=0
    small=height[0]
    sum=0
    while right<height.length # 3<4
        if height[right]>small # false | false | true
            small=height[right] # 2
            max_container=[height[right], height[left]].min # 2
            temp=right-1 #  2
            while temp>left && height[temp]< max_container #
                diff=max_container-height[temp]
                sum+=diff # 
                height[temp]+=diff
                temp-=1
            end
            left=right if height[right]>=height[left] # 
        else # true | true
            small=height[right] # 1
        end
        right+=1
    end
    sum
end