# @param {String} s
# @param {String[]} words
# @return {Integer[]}
def find_substring(s, words)
    result=[]
   expected=words.sort!.join("")

    windowSize=words[0].length*words.length
    for i in 0..(s.length-windowSize)
        result.push(i) if s.slice(i,windowSize).scan(/\w{#{words[0].length}}/i).sort.join("")==expected
    end
    result
end