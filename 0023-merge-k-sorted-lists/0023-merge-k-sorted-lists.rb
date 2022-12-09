# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode[]} lists
# @return {ListNode}
def merge_k_lists(lists)
    vals=[]
    lists.each do |list| 
        while list
            vals.push(list.val)
            list=list.next
        end
    end
    return vals if vals.empty?
    vals.sort!
    head=ListNode.new(vals[0])
    iterator=head
    vals.slice!(0,1)
    vals.each do |val|
        iterator.next=ListNode.new(val)
        iterator=iterator.next
    end
    head
# ---------------------------------------------------------------

#     iterator,sorted=nil,nil
#     lists.filter! {|node| node}
    
#     while !lists.empty?
#         min_index=0
#        lists.each_with_index do |node,index|
#            min_index=index if node.val<lists[min_index].val
#        end
#         new_node=ListNode.new(lists[min_index].val)
#         lists[min_index]=lists[min_index].next
#         lists.slice!(min_index,1) if lists[min_index].nil?
#         if sorted.nil?
#             sorted=new_node 
#             iterator=sorted
#         else
#             iterator.next=new_node
#             iterator=iterator.next
#         end
#     end
  
# ---------------------------------------------------------------
   #     def recurse nodes
   #     # p nodes
   #     return nil if nodes.length==0
   #     return nodes[0] if nodes.length==1
   #     max_index=0
   #     nodes.each_with_index do |node,index|
   #         max_index=index if node.val<nodes[max_index].val
   #     end
   #     new_node=ListNode.new(nodes[max_index].val)
   #     nodes[max_index]=nodes[max_index].next
   #      nodes.slice!(max_index,1) if nodes[max_index].nil?
   #     next_node=recurse(nodes)
   #     new_node.next=next_node
   #     new_node
   # end
   #  recurse lists
    # sorted
end