def hasPathWithGivenSum(t, s)
    if t.nil?
        return s == 0 ? true : false
    end
    
    if (t.left != nil) && (t.right != nil)
        hasPathWithGivenSum(t.left, s - t.value) || hasPathWithGivenSum(t.right, s - t.value)
    elsif (t.left != nil)
        hasPathWithGivenSum(t.left, s - t.value)
    else
        hasPathWithGivenSum(t.right, s - t.value)
    end
    
end

def isTreeSymmetric(t)
    return true if t.nil?
    return check_sides(t.left, t.right)
end

def check_sides(sub_tree_left, sub_tree_right)
    
    if sub_tree_left == nil && sub_tree_right == nil
        return true
    elsif sub_tree_left == nil || sub_tree_right == nil
        return false
    elsif sub_tree_left.value != sub_tree_right.value
        return false
    end
    
    
    if check_sides(sub_tree_left.left,sub_tree_right.right) == false
        return false
    end
    
    return check_sides(sub_tree_left.right,sub_tree_right.left)
end

def findProfession(level, pos)
    return 'Engineer' if level == 1
    
    if findProfession(level - 1, (pos + 1) / 2 ) == 'Doctor'
        if pos % 2 != 0
            return 'Doctor'
        else
            return 'Engineer'
        end
    end
    
    if pos % 2 == 0
        return 'Doctor'
    else
        return 'Engineer'
    end
end

def kthSmallestInBST(t, k, arr = [])
    return [] if t.nil?
    
    if t.left
        left = kthSmallestInBST(t.left, k, arr)
    end
    
    arr << t.value
    
    if t.right
        right = kthSmallestInBST(t.right, k, arr)
    end
    
    arr[k - 1]
end

def isSubtree(t1, t2)
    return true if t1.nil? && t2.nil?
    
    left = build_tree_arr(t1, arr1 = [])
    right = build_tree_arr(t2, arr2 = [])
    
    
    root = right[0]
    
    root_indexes = []
    
    left.each_with_index { |el, i| root_indexes << i if el == root }
    
    root_indexes.each do |idx|
        return true if left[idx..(idx + right.size - 1)] == right
    end
    
    false
end

def build_tree_arr(t, arr = [])
    if t.nil?
        arr << nil
        return arr
    elsif t.value && t.value == nil
        arr << nil
        return arr
    end
    
    arr << t.value
    build_tree_arr(t.left, arr)
    build_tree_arr(t.right, arr)
    
    arr
end

def restoreBinaryTree(inorder, preorder)
    return nil if inorder.size == 0
    
    root = preorder[0]
    
    tree = Tree.new(root)
    
    left_sub = inorder.index(root)

    tree.left = restoreBinaryTree(inorder[0...left_sub], preorder[1..left_sub])
    
    tree.right = restoreBinaryTree(inorder[(left_sub + 1)..-1], preorder[(left_sub + 1)..-1])
    
    return tree
end


