# @param {String} text
# @return {Integer}
def max_rep_opt1(text)
    max=i=0
    while i<text.length
        win=count=0
        j=i
        while j<text.length && count<2
             if text[j]!=text[i]
                 count+=1
                 i=j-1 if count==1
             end
            win+=1
            j+=1
        end
        k=j
         if count==2
             count-=1
             win-=1
         end
        while k<text.length && count>0
            count-=1 if text[k]==text[i]
            k+=1
        end
        win=win-count
        max=win if win>max
        i+=1
    end
    #
    i=text.length-1
        while i>=0
        win=count=0
        j=i
        while j>=0 && count<2
             if text[j]!=text[i]
                 count+=1
                 i=j+1 if count==1
             end
            win+=1
            j-=1
        end
        k=j
         if count==2
             count-=1
             win-=1
         end
        while k>=0 && count>0
            count-=1 if text[k]==text[i]
            k-=1
        end
        win=win-count
        max=win if win>max
        i-=1
    end
    
    max
end