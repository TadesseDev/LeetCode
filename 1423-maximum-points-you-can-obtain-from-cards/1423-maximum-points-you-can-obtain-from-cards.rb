# @param {Integer[]} card_points
# @param {Integer} k
# @return {Integer}
def max_score(card_points, k)
    sum=card_points.slice(0,card_points.length-k).sum
    temp_sum=sum
    n=j=0
    i=card_points.length-k
    # p sum
    while i<card_points.length
        temp_sum+=card_points[i]
        temp_sum-=card_points[j]
        i+=1
        j+=1
        if temp_sum<sum
            sum=temp_sum
            n=j
        end
    end
    # p n
    card_points.slice(0,n).sum + card_points.slice(n+(card_points.length-k), card_points.length).sum
end