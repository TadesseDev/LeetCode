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
         if root.left 
            res = lowest(root.left, p, q)
            return res if res.class == TreeNode
            ret+=res
         end
         if root.right
            res = lowest(root.right, p, q)
            return res if res.class == TreeNode
            ret+=res
         end
        
        ret+=1 if (root==p || root==q)
        return root if ret > 1
        ret
    end
    lowest(root, p, q)

end