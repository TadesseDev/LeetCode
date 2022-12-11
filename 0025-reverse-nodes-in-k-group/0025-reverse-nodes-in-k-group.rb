# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} k
# @return {ListNode}
def reverse_k_group(head, k)
    temp=head
    result=[]
    while temp do
        next_next=temp.next
        temp.next=nil
        result.push(temp)
        temp=next_next
    end
    i=0
    while i+k<=result.length do
        reverse=result.slice(i,k).reverse
        l=0
        while l<reverse.length
            result[i+l]=reverse[l]
            l+=1
        end
        i+=k
    end
    top=result[0]
    temp=result[0]
    for i in 0..result.length-1
        temp.next=result[i+1]
        temp=temp.next
    end
    top
end