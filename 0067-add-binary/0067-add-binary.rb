# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
   
    def rec(a,b,i,j,cary)
        res=0
        if i < 1 && j<1 
             res=(a[i] || 0).to_i if i>=0
             res+=(b[j] || 0).to_i if j>=0
            res+=cary
           # p [res,a[i],b[-1], cary]
            if res>2
                return "11"
            elsif res>1
                return "10"
            else
                return res.to_s
            end
        end
             res=(a[i] || 0).to_i if i>=0
             res+=(b[j] || 0).to_i if j>=0
            res+=cary
        
        # p [res,a[i],b[j], cary]

        if res==3
            cary=1
            res=1
        elsif res==2
            cary=1
            res=0
        else
            cary=0
        end
        
        # p [res, cary]
        rec(a,b,i-1, j-1,cary).concat(res.to_s)
    end
     rec(a,b,a.length-1, b.length-1,0)
end