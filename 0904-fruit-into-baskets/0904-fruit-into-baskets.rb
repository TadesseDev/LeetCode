# @param {Integer[]} fruits
# @return {Integer}
def total_fruit(fruits)
    i,count=0,0
    while i<fruits.length
        basket,temp_count,j=[fruits[i]],0,i
        while j< fruits.length
            if basket.include?(fruits[j])
                temp_count+=1
            elsif basket.length<2
                basket.push(fruits[j])
                i=j-1
                temp_count+=1
            else
                break;
            end
            j+=1
        end
        count=temp_count if temp_count>count 
        break if count>=fruits.length-i
        i+=1
    end
    count
end