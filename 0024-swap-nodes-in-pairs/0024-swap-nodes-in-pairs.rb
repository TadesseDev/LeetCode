# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def swap_pairs(head)
    return head if head.nil? || head.next.nil?
    couples=[]
    iterator=head
    ### Separate nodes
    while iterator && iterator.next
        next_iterator=iterator.next.next
        iterator.next.next=nil
        couples.push(iterator)
        iterator=next_iterator
    end
    
    ### szwich each nodes
    for i in  0..couples.length-1
        cur=couples[i].next
        couples[i].next=nil
        cur.next=couples[i]
        couples[i]=cur
    end
    ### build the switch
    top=couples[0]
    for i in  0..couples.length-1
        couples[i].next.next=couples[i+1]  
    end
    couples[couples.length-1].next.next = iterator if iterator
    top
end