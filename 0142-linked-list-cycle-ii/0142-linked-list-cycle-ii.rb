# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def detectCycle(head)
    return nil if head.nil?
    @cycle={}
    @iterator=head
    while @iterator.next
        return @iterator.next if @cycle[@iterator.next]
        @cycle[@iterator]=true
        @iterator=@iterator.next
    end
    nil
end