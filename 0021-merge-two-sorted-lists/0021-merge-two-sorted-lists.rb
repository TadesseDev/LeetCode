# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    if !(list1 || list2)
        @head=[]
    elsif list1 && list2 && list1.val <= list2.val
        @head=ListNode.new(list1.val)
        list1=list1.next
    elsif list1 && list2 && list1.val > list2.val
        @head=ListNode.new(list2.val)
        list2=list2.next
    elsif list1
        @head=ListNode.new(list1.val)
        list1=list1.next
    else
        @head=ListNode.new(list2.val)
        list2=list2.next
    end
    final=@head
    @list1=list1
    @list2=list2
    while !@list1.nil? && !@list2.nil?
        if @list1.val==@list2.val
            @head.next=ListNode.new(@list1.val)
            @head.next.next=ListNode.new(@list2.val)
            @head=@head.next.next
            @list1=@list1.next
            @list2=@list2.next
        elsif @list1.val<@list2.val
            @head.next=ListNode.new(@list1.val)
            @head=@head.next
            @list1=@list1.next
        else
            @head.next=ListNode.new(@list2.val)
            @head=@head.next
            @list2=@list2.next
        end
    end
    while !@list1.nil?
            @head.next=ListNode.new(@list1.val)
            @head=@head.next
            @list1=@list1.next
    end
    while !@list2.nil?
            @head.next=ListNode.new(@list2.val)
            @head=@head.next
            @list2=@list2.next
    end
    final
end