# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
    return s if num_rows<2 
top_ro_bottom=false
res=s[0,num_rows].split("")
    counter=num_rows
    while counter < s.length
        new_str=s[counter, num_rows-1]
        if top_ro_bottom
            new_str.each_char.with_index {|char, index| res[index+1].insert(-1,char)}
        else
            new_num=num_rows-2
            new_str.each_char.with_index do |char, index|
                res[new_num].insert(-1,char)
                new_num-=1
            end
        end
        counter+=(num_rows-1)
        top_ro_bottom=!top_ro_bottom
    end
    res.join("")
end