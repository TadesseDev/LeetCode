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
    
    def valdiate node
        return [node.val, node.val] if node.left.nil? && node.right.nil?
        left=node.val
        right=node.val
        if node.left
            res=valdiate node.left
            return false if !res || res[0]>=node.val || res[1]>=node.val
            left=res[0]
        end
        if node.right
            res=valdiate node.right
            return false if !res || res[0]<=node.val || res[1]<=node.val
            right=res[1]
        end
        return [left, right]
    end
    return valdiate(root)&&true
end