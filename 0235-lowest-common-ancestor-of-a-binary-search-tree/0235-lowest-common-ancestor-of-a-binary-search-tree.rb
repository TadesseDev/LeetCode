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
    return nil if root.nil?
    sum=0
    if root.left
        ret=lowest_common_ancestor(root.left, p, q)
        return ret if ret.class.to_s == "TreeNode"
        sum+=ret
    end
    if root.right
        ret=lowest_common_ancestor(root.right, p, q)
        return ret if ret.class.to_s == "TreeNode"
        sum+=ret
    end
    sum+=1 if root==p||root==q
    return root if sum>1
    sum
end