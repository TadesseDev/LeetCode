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
def middle_node(head)
    @middle=head
    @iterator=head.next
    @flag=false
    while @iterator
        @middle=@middle.next if @flag
        @flag=!@flag
        @iterator=@iterator.next
    end
        @middle=@middle.next if @flag
    @middle
end