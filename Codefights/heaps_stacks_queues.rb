def kthLargestElement(nums, k)
    nums.sort[-1 - (k - 1)]
end

def decodeString(s)
    result = ""
    word_stack = []
    num_stack = []
    
    idx = 0
    
    while idx < s.length
        if s[idx] =~ /[0-9]/
            num = ""
            while s[idx] =~ /[0-9]/
                num += s[idx]
                idx += 1
            end
            num_stack << num.to_i
            word_stack << result
            result = ""
        elsif s[idx] == "]"
            result = word_stack.pop + string_maker(num_stack.pop, result)
        else
            result += s[idx]
        end
        idx += 1
    end
    
    result
end

def string_maker(num, str)
    res = ""
    num.times { res += str }
    return res
end

def nextLarger(a)
    result = []
    (0...a.size).each do |i|
        y = i + 1
        while y < a.size && a[i] >= a[y]
            y += 1
        end
        
        if y == a.size
            result << -1
        else
            result << a[y]
        end
    end
   
    result
end

def minimumOnStack(operations)
    min = nil
    stack = []
    min_stack = []
    result = []
    operations.each do |ops|
        if ops == "min"
            result << min_stack[-1]
        elsif ops == "pop"
            el = stack.pop
            min_stack.pop if el == min_stack[-1]
        elsif ops[0..3] == "push"
            num = ops.gsub(/[^\d]/, '').to_i
            stack << num
            min_stack << num if min_stack.empty? || num < min_stack[-1]
        end
    end

    result
end

# Codefights - Count Clouds
# Done with BFS

def countClouds(skyMap)
    marker = 0
    
    row = 0
    queue = []
    while row < skyMap.size
        col = 0
        
        while col < skyMap[row].size
            
            if skyMap[row][col] && skyMap[row][col] == "1"
                marker += 1
                skyMap[row][col] = marker
                queue << [row, col] 
            end
            
            until queue.empty?
                coord = queue.shift
                
                left_child = [coord[0], coord[1] - 1] if coord[1] - 1 >= 0
                right_child = [coord[0], coord[1] + 1] if coord[1] + 1 < skyMap[row].size
                top_child = [coord[0] - 1, coord[1]] if coord[0] - 1 >= 0
                bottom_child = [coord[0] + 1, coord[1]] if coord[0] + 1 < skyMap.size
            
                if left_child && skyMap[left_child[0]][left_child[1]] == "1"
                    queue << left_child
                    skyMap[left_child[0]][left_child[1]] = marker
                end
                if right_child && skyMap[right_child[0]][right_child[1]] == "1"
                    queue << right_child 
                    skyMap[right_child[0]][right_child[1]] = marker
                end
                
                if top_child && skyMap[top_child[0]][top_child[1]] == "1"
                    queue << top_child 
                    skyMap[top_child[0]][top_child[1]] = marker
                end
                
                if bottom_child && skyMap[bottom_child[0]][bottom_child[1]] == "1"
                    queue << bottom_child 
                    skyMap[bottom_child[0]][bottom_child[1]] = marker
                end
            end
            col += 1
        end
        row += 1
    end
    
    marker
end

# Codefights - Nearest Greater
# Done with Stack

def nearestGreater(a)
    
    result = []
    stack = []
  
    a.each_with_index do |el, i|
       
        while !stack.empty? && a[stack[-1]] < el
            num = stack.pop
            if result[num] == -1 || (i - num < num - result[num])
                result[num] = i
            end
        end
        
        if stack.empty?
            result[i] = -1 
        else
            if el != a[stack[-1]]
                result[i] = stack[-1]
            else
                result[i] = result[stack[-1]]
            end
        end
        stack << i
    end
    
    result
end

    
   