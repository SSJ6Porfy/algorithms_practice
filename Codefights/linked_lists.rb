def removeKFromList(l, k)
    if l.nil?
      return l
    end
  
    while l.value == k && l.next
      l = l.next
    end
  
    return [] if l.value == k
  
    last = l
    current = last.next
  
    while current
      if current.value == k
        last.next = current.next
      else
        last = last.next
      end
  
      current = current.next
    end
  
    l
end

def isListPalindrome(l)

    arr = []
    
    current = l
    
    while current
        arr << current.value
        current = current.next
    end
    
    arr == arr.reverse
end

def addTwoHugeNumbers(a, b)
    a_arr = []
    node = a
    
    while node
        a_arr << node.value
        node = node.next
    end
    
    b_arr = []
    node = b
    
    while node
        b_arr << node.value
        node = node.next
    end
    a_arr = a_arr.map do |num| 
        num = num.to_s 
        num = '0' + num until num.length == 4
        num
    end
    b_arr = b_arr.map do |num| 
        num = num.to_s 
        num = '0' + num until num.length == 4
        num
    end
    
    a_int = a_arr.join("").to_i
    b_int = b_arr.join("").to_i

    sum = a_int + b_int
    
    arr = sum.to_s.reverse.chars
                .each_slice(4)
                .to_a
                .map(&:reverse)
                .reverse
                .map(&:join)
                .map(&:to_i)
end

def mergeTwoLinkedLists(l1, l2)
    result = []
    
    while l1 && l2
        if l1 && l2 && l1.value < l2.value
            result << l1.value
            l1 = l1.next
        elsif l1 && l2 && l1.value > l2.value
            result << l2.value
            l2 = l2.next
        elsif l1 && l2 && l1.value == l2.value
            result << l1.value
            result << l2.value
            l1 = l1.next
            l2 = l2.next
        end
    end
    
    if l1
        while l1
            result << l1.value
            l1 = l1.next
        end
    else
        while l2
            result << l2.value
            l2 = l2.next
        end
    end
    result
end

def reverseNodesInKGroups(l, k)
    result = []
    cache = []
    while l
        cache << l.value if cache.size < k
        if cache.size == k
            result << cache.pop until cache.empty?
        end
        l = l.next
    end
    
    if cache.size > 0
        result = result + cache
    end
    result
end

def rearrangeLastN(l, n)
    result = []
    
    while l
        result << l.value
        l = l.next
    end
    return result if n == 0
    result[(-n)..-1] + result[0...(result.size - n)]
end


