# @param {String} secret
# @param {String} guess
# @return {String}
def get_hint(secret, guess)
    baa=0
    caa=0
    s_array=[]
    g_array=[]
    for k in 0...secret.length
        if secret[k]==guess[k]
            baa+=1 
        else
            s_array<<secret[k]
            g_array<<guess[k]
        end
    end
    g_array.each do |chr|
        s_ind = s_array.index(chr)
        if s_ind!=nil
            caa+=1
            s_array.delete_at(s_ind)
        end
    end
    "#{baa}A#{caa}B"
end