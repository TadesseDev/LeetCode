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
    @cycle=[]
    @iterator=head
    while @iterator.next
        return @iterator.next if @cycle.include?(@iterator.next)
        @cycle.push(@iterator)
        @iterator=@iterator.next
    end
    nil
end