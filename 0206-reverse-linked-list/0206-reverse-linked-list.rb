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
def reverse_list(head)
   @new_head=[]
    def get_tail(node)
        return [] if node.nil?
        if node.next.nil?
            @new_head=ListNode.new(node.val)
            return @new_head
        end
        new_node=ListNode.new(node.val)
        get_tail(node.next).next=new_node
        new_node
    end
    get_tail(head)
    @new_head
end