# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum(candidates, target)
    candidates.sort!
    @result=[]
    def get_result(candidates, target)
        return [] if candidates.length == 0 || candidates[0]>target
        ele=candidates[0]
        ret=get_result(candidates.slice(1,candidates.length), target)
        ret.push([[ele], ele])
        @result.push([ele]) if ele == target
        min_sum=ele
        temp=[*ret]
        while min_sum<target
            new_valid_elements=[]
            temp.each do |arr|
                new_res=[[*arr[0]].push(ele), arr[1]+ele]
                if new_res[1]<=target
                    new_valid_elements.push(new_res) if new_res[1]<target
                    @result.push(new_res[0]) if new_res[1]==target
                end
            end
            temp=[*new_valid_elements]
            ret.push(*new_valid_elements)
            min_sum+=ele
        end
        return ret
    end
    get_result(candidates, target)
    @result
end

