# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    i=digits.length-1
    while i>=0 
        num=1+digits[i]
        if num==10
            num=0
            digits[i]=num
        else 
            digits[i]=num
            return digits
        end
        i-=1
    end
    digits.unshift(1) 
end