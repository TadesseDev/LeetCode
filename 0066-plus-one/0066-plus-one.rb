# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    new_arr=[*digits]
    i=new_arr.length-1
    while i>=0 
        num=1+new_arr[i]
        if num==10
            num=0
            new_arr[i]=num
        else 
            new_arr[i]=num
            return new_arr
        end
        i-=1
    end
    new_arr.unshift(1) 
end