# The is_bad_version API is already defined for you.
# @param {Integer} version
# @return {boolean} whether the version is bad
# def is_bad_version(version):

# @param {Integer} n

# @return {Integer}
def first_bad_version(n)
    good=0
    bad=n
    track=(n/2)
    while bad-good>1 
        if is_bad_version(track)
            bad=track
        else
            good=track
        end
        track=good+((bad-good)/2)
    end
    bad
end