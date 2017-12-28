
def rotateImage(a)
    result = []
    
    i = 0
    while i < a.length
        j = a.length - 1
        new_row = []
        while j >= 0
            new_row << a[j][i]
            j -= 1
        end
        result << new_row
        i += 1
    end
    
    result
end


def isCryptSolution(crypt, solution)

    hash = {}
    
    solution.each { |key_pair| hash[key_pair[0]] = key_pair[1] }
    
    result = crypt.map { |str| str.chars.map{ |chr| hash[chr] }.join('') }
    
    result.each { |num| return false if num[0] == '0' && num != '0' }
    
    result = result.map(&:to_i)
    
    result[0] + result [1] == result[2]
end


# Maximum Subarray
# arr = [-2,1,-3,4,-1,2,1,-5,4]
# returns [4,-1,2,1]

def maximum_subarray(arr)
    max_arr = []
    max_sum = 0
    curr = []
    curr_sum = 0
    i = 0
    while i < arr.size
        if curr_sum < 0
            curr_sum = 0
            curr = []
        end
       
        curr << arr[i]
        curr_sum += arr[i]

        if curr_sum > max_sum 
            max_sum = curr_sum
            first = curr.first
            last = curr.last
            max_arr = curr.dup
            p max_arr
        end
        i += 1
    end
    
    max_arr
end

arr1 = [-2,1,-3,4,-1,2,1,-5,4]

p maximum_subarray(arr1)


