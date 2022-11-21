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
  visited = {}
  return nil if head.nil?
  
  while head
    return head.next if visited[head.next]
    
    visited[head] = true
    head = head.next
  end
end