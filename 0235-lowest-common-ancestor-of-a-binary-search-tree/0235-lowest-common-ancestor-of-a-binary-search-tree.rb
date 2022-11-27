# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @param {TreeNode} p
# @param {TreeNode} q

# @return {TreeNode}
def lowest_common_ancestor(root, p, q)

    def lowest(root, p, q)
         # p root.val
        ret=0 
        left, right=0,0
            left = lowest(root.left, p, q) if root.left 
            return left if left.class == TreeNode
            right = lowest(root.right, p, q) if root.right
            return right if right.class == TreeNode
        ret+=left+right
        ret+=1 if (root==p || root==q)
        return root if ret > 1
        ret
    end
    lowest(root, p, q)

end