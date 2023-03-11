# @param {Integer} num
# @param {Integer} k
# @return {Integer}
def divisor_substrings(num, k)
    i,count=0,0
    str=num.to_s
    while i+k<=str.length
        begin
        count+=1 if num % str.slice(i,k).to_i == 0
        rescue ZeroDivisionError
        end
        i+=1
    end
    count
end