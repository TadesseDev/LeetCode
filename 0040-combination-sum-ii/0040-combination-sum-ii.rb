# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum2(candidates, target)
    @result={}
    def get_combination(candidates, target, permutuation, index)
        return [] if candidates.length == index 
        ele=candidates[index]
        result=[]
         if ele==target
            result.push([ele])
             return result
         else
            next_permutuation=[*permutuation]
            permutuation.each do |arr|
                new_combination = [[*arr[0]].push(ele), arr[1]+ele]
                next if @result[new_combination[0]]
                @result[new_combination[0]]=true
                if new_combination[1] <= target
                     if new_combination[1] < target
                         next_permutuation.push(new_combination)
                     else
                         result.push(new_combination[0]) 
                          
                     end
                end
            end
            next_permutuation.push([[ele], ele]) if  @result[[ele]].nil?
             @result[[ele]]=true
            permutuation=next_permutuation
        end
        # p permutuation
        return get_combination(candidates, target, permutuation, index+1) + result
        
    end
    
    get_combination(candidates.filter{|ele| ele<=target}.sort, target, [], 0)
end