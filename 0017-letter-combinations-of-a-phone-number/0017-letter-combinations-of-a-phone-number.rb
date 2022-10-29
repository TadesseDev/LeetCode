# @param {String} digits
# @return {String[]}
@hash={"2": 'abc',"3": 'def',"4": 'ghi',"5": 'jkl',"6": 'mno',"7": 'pqrs',"8": 'tuv',"9": 'wxyz'}
def letter_combinations(digits)
    return [] if digits.length<1
    return @hash[digits.to_sym].split("") if digits.length==1
    ret=letter_combinations(digits.slice(0,digits.length-1))
    result=[]
    chars=@hash[digits[digits.length-1].to_sym]
    ret.each do |char|
        result.push(char+chars[0],char+chars[1],char+chars[2]) 
        result.push(char+chars[3]) if chars.length>3
    end
    return result
end