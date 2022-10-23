# @param {String} s
# @param {String} p
# @return {Boolean}
def is_match(s, p)
    p="^"+p+"$"
    puts p
    reg=Regexp.new p
    s.match?(reg)
end