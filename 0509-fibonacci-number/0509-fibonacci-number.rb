# @param {Integer} n
# @return {Integer}
def fib(n)
    return 0 if n==0
    def find_fib(n)  
        return [0,1] if n<2
        res=find_fib(n-1)
        [res[1], res[0]+res[1]]
    end
    find_fib(n)[1]
end