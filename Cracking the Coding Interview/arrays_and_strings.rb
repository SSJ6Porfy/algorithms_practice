# Problem (1)
def unique_string(str)
    letters = {}

    str.each_char do |char|
        return false if letters.has_key?(char)
        letters[char] = true
    end

    true
    # O(n) complexity
    # if other data structures weren't allowed
    # one could use a quadratic function to compare chars
    # or sort and compare pairs
end

# str = 'abcdef'
# p unique_string(str)

# Problem (2)

def is_permutation?(str1, str2)
   hash = Hash.new(0)
   str1.each_char { |chr| hash[chr] += 1 }
   str2.each_char { |chr| hash[chr] -= 1 }
   hash.each { |k , v| return false if v != 0 }
   true
    # O(n) complexity
end

ex1 = 'abcdef'
ex2 = 'cbafed'

# p is_Permutation?(ex1, ex2)

# Problem (3)
def urlify(str)
    str.split(' ').join('%20')
end

# str = 'Mr John Smith    '
# p urlify(str)

# Problem 4 - correct answer
def palin_perm?(str)
    str = str.downcase
    blank = 0
    odd_count = 0
    hash = Hash.new(0)
    str.each_char do |chr|
        blank += 1 if chr == ' '
        hash[chr] += 1 unless chr == ' '
    end

    hash.each_pair do |key, val|
        odd_count += 1 if hash[key].odd?
    end

    if (str.length - blank).even?
        odd_count == 0 ? true : false
    else
        odd_count < 2 ? true : false
    end
end

str1 = 'Tact Coa'
str2 = 'abbbacc'

# p palin_perm?(str1)
# p palin_perm?(str2)

# str = 'Tact Coa'
# p palin_perm?(str)
# Problem 5
def one_away(str1, str2)
    return false if (str1.length - str2.length).abs > 1
    count = 0
    str1_hash = {}

    str1.each_char do |char|
        str1_hash[char] = true
    end

    str2.each_char do |char|
        count += 1 unless str1_hash.has_key?(char)
    end

    count < 2 ? true : false
end

# str1 = 'pale'
# str2 = 'pales'
# str3 = 'bale'
# str4 = 'bake'
# str5 = 'ple'

# p one_away(str1, str5)
# p one_away(str2, str1)
# p one_away(str1, str3)
# p one_away(str1, str4)

def look_say(str)
    arr = [[ 1, str[0] ]]
    (1..str.length - 1).each do |i|
        if arr.last[1] == str[i]
            arr.last[0] += 1
        else
            arr << [1, str[i]]
        end
    end
    arr.map { |count| "#{count[1]}#{count[0]}" }.join('')
end

# Problem 6
def string_comp(str)
    counted = look_say(str)
    if str.length <= counted.length
        str
    else
        counted
    end
end

# str = 'aabcccccaaa'

# p string_comp(str)

# Problem 7
def rotate_matrix(arr)
    
    idx1 = 0

    while idx1 < arr.size / 2
        idx2 = idx1
        last = arr.size - idx1 - 1  
        while idx2 < last
            offset = idx1 - idx2
            top = arr[idx1][idx2]
            arr[idx1][idx2] = arr[last - offset][idx1]

            idx2 += 2
        end
        idx1 += 1
    end
end



# Problem 8
def zero_matrix(matrix)
    row_col = find_zero(matrix)
    return 'No Zeros found' if row_col.empty?
    
    row_col.each do |coords|
        idx = 0
        while idx < matrix.length
            matrix[coords[0]][idx] = 0
        idx += 1
        end
    end

    row_col.each do |coords|
        idx = 0
        while idx < matrix.length
            matrix[idx][coords[1]] = 0
        idx += 1
        end
    end
    matrix.each do |row|
        p row
    end
end

def find_zero(matrix)
    zeros = []
    row = 0
    while row < matrix.length
        col = 0
        while col < matrix[0].length
            zeros << [row, col] if matrix[row][col] == 0
            col += 1
        end
        row += 1
    end
    zeros
end

arr = [ [0, 2, 3, 4],
        [5, 6, 0, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]]

# p zero_matrix(arr)

# Problem 9
# My answer works
def string_rotation(str1, str2)

    check = is_permutation?(str1, str2)

    if check
        curr = str2.chars

        str2.length.times do
            curr << curr.shift
            return true if curr.join == str1 
        end
    end
    false
end

# p string_rotation("baaabbc", "aaabbbc")

def version_check(versions)
	return versions[0] if versions.size == 1 && $API[versions[0]]

	mid = versions.size / 2
	
    left = false
    
	if $API[versions[mid]]
        left = version_check(versions[0...mid]) # Left of mid recursive call
        if left && left < versions[mid]
            return left
        else
            return versions[mid]
        end
    else
        return false if versions[(mid+1)..-1].size == 0
        version_check(versions[(mid+1)..-1]) # Right side call
	end
    
end

v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

$API = {
    1 => true,
    2 => true,
    3 => true,
    4 => true,
    5 => true,
    6 => true,
    7 => true,
    8 => true,
    9 => true,
    10 => true,
}

# p version_check(v)

