# @param {String} s
# @param {Integer} k
# @return {Integer}
def longest_substring(s, k)
    @window=0
    @k=k
    def recurse(arr)
        arr.each do |win|
            #validate if the window is valid 
            next if win.length<=@window
            i,count,valid=0,0,true
                char=String.new(win)            
            # p "#{char}"
            while i<char.length && valid
                # p i
                 if char[i]=="1"
                     i+=1
                     next
                 end
                count=0;
                j=0
               while j<char.length
                    if char[j]==win[i]
                        count+=1;
                        char[j]="1"
                    end
                   j+=1
                # p "#{win}, #{char}, #{win[j]},#{count}, #{j}"
               end
                if count<@k
                    # p "invalid"
                    #This window is invalid
                
                    new_windows=win.split(win[i]).filter{|new_window| new_window.length>@window}

                    recurse(new_windows)
                    valid=false
                end
                i+=1
                # p i
            end
                if valid
                    # window is valid
                    @window=win.length 
                end
        end
    end
    recurse([s])
    @window
end