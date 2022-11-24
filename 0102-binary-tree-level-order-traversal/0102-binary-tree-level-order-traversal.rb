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
@result=[]
    def level_traverse level
        return nil if level.empty?
        @result.push(level.map {|node| node.val})
        next_level=[]
        level.each do |node| 
            next_level.push(node.left) if node.left
            next_level.push(node.right) if node.right
        end
        level_traverse next_level
    end
    level_traverse [root] if root
    return @result
end