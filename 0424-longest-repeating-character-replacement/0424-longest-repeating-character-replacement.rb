# @param {String} s
# @param {Integer} k
# @return {Integer}
def character_replacement(s, k)
    char_hash = Hash.new(0)
  res = 0
  left = 0

  for right in 0..(s.length-1)
    char_hash[s[right]] += 1

    while (right - left + 1) - char_hash.values.max > k
      char_hash[s[left]] -= 1
      left += 1
    end

    res = [res, (right - left + 1)].max
  end

  res
end