# @param {String} s
# @param {Integer} k
# @return {Integer}
def longest_substring(s, k)
    @window=0
    @k=k
    def check_if_valid_window_exist(arr)
        arr.each do |win|
            # validate if the window is valid 
            next if win.length<=@window
            i,count,valid=0,0,true
                char=String.new(win)    
            while i<char.length && valid

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
               end
                if count<@k
                    #This window is invalid
                    new_windows=win.split(win[i]).filter{|new_window| new_window.length>@window}
                    check_if_valid_window_exist(new_windows)
                    valid=false
                end
                i+=1
            end
               @window=win.length if valid
        end
    end
    check_if_valid_window_exist([s])
    @window
end