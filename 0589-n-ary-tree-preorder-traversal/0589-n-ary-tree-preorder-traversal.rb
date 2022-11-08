# Definition for a Node.
# class Node
#     attr_accessor :val, :children
#     def initialize(val)
#         @val = val
#         @children = []
#     end
# end

# @param {Node} root
# @return {List[int]}
def preorder(root)
    return [] if root.nil?
@result=[]
    def traverse node
        @result.push(node.val)
        node.children.each do |child|
            traverse child
        end
    end
    traverse root
    @result
end