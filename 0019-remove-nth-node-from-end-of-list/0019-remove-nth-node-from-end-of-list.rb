# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
    @count=0
    @n=n
    def recurese head
        return head if head.nil?
        ret=recurese(head.next)
        @count+=1
        node=ListNode.new(head.val)
        return ret if @count==@n
        node.next=ret
        node
    end
    recurese head
end