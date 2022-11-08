# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer[][]}
def level_order(root)
    return [] if root.nil?
    @stack=[[root]]
    @track=0
    while @track<@stack.length
        arr=[]
        @stack[@track].each do |node|
            arr.push(node.left) unless node.left.nil?
            arr.push(node.right) unless node.right.nil?
        end
         @stack.push(arr) unless arr.empty?
        @track+=1
    end
    @stack.map {|arr| arr.map {|node| node.val}}
end