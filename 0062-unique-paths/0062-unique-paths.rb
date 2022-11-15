# @param {Integer} m
# @param {Integer} n
# @return {Integer}
def unique_paths(m, n)
    @hash={}
    @hash[[m,n].to_s]=1
    @n=n
    @m=m
   def recurse(y,x)
       
       return 1 if y==@m && x==@n
        rsym=[y,x+1].to_s
        lsym=[y+1,x].to_s
           
        right=@hash[rsym]
        right=recurse(y, x+1) unless @hash[rsym] || x+1>@n
        left=@hash[lsym]
        left=recurse(y+1, x) unless @hash[lsym] || y+1>@m
           
       left||=0
       right||=0
       sum=right+left
       @hash[[y,x].to_s]=sum
       sum
   end
      recurse(1,1) 
    p @hash[[1,1].to_s]
end