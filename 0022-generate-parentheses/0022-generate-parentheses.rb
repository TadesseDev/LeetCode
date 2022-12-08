# @param {Integer} n
# @return {String[]}
def generate_parenthesis(n)
    @n=n
        def recurse (ele, open,close)
            return [ele+")"] if ele.length==(@n*2)-1
            res1=open<@n ? recurse(ele+"(", open+1, close) : []
            res2=open>close ? recurse(ele+")", open, close+1) : []
            return [*res1, *res2]
        end
    recurse("",0,0)
end