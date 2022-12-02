# @param {String[]} words
# @param {Integer} k
# @return {String[]}
def top_k_frequent(words, k)
#     hash={}
#     i=0
#     while i<words.length
#         if hash[word[i]]
#             hash[word[i]]+=1
#             if hash
#         else
#              hash[word[i]]=1
#         end
#     end
#     arr=hash.to_a
#     def merge_sort(arr)
#         return arr if arr.length<2
#         if arr.length==2
#          return arr[0][1]<srr[1][1] ? [arr[0],arr[1]]:[arr[1],arr[0]]
#         end
#         ret1=merge_sort(arr.slice(0, arr.length/2))
#         ret2=merge_sort(arr.slice(arr.length/2, arr.length))
#         ## merge and return 
#         let k=0
#         while k<ret1.length
#             while 
#             k+=1
#         end
#     end
     map = Hash.new(0)
    words.each do |w|
        map[w] += 1
    end
    
    heap = Heap.new { |x, y| comp(x, y) }
    
    map.each do |word, v|
        heap << [word, v]
        heap.pop if heap.size > k        
    end
    
    res = []
    while (heap.size > 0)
        word, freq = heap.pop
        res << word
    end
    res.reverse
end

def comp(x,y)
    # if freq not same, order by freq in desc order.
    if x[1] != y[1]
        (y[1] <=> x[1]) == 1
    else
    # otherwise order in asc by work (lexi)        
        (x[0] <=> y[0]) == 1
    end
end