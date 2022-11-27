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
@lca=nil
    def lowest(root, p, q)
        ret=0
        ret += lowest(root.left, p, q) if root.left
        ret += lowest(root.right, p, q) if root.right
        ret+=1 if root==p || root==q

         @lca=root if ret > 1 && @lca.nil?
        ret
    end
    lowest(root, p, q)
    @lca
end