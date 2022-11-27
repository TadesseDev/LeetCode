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
# @return {Boolean}
def is_valid_bst(root)
    def validate(node, min, max)
        return false if node.val<=min || node.val>=max
        if node.left
            return false if !validate( node.left, min, node.val)
        end
        if node.right
             return false if !validate( node.right, node.val, max)
        end
        return true
    end
    min,max=10**31*-1, 10**31
    validate(root, min, max)!=false
end