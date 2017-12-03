require 'set'
# Day 1

# Set A
def digital_root(int)
    return int if int < 10
    num = int % 10
    return digital_root(num + (int / 10))
end

# p digital_root(1148)

def caesar_cipher(str, shift)
    alpha = ('a'..'z').to_a
    result = ''
    str.each_char do |chr|
        if chr == ' '
            result += ' '
        else
            result += alpha[((str.ord - 97) + shift) % 26]
        end
    end

    result
end

# str = 'zzz'

# p caesar_cipher(str, 1)

# SET B

def longest_common_substring(str1, str2)
    longest = ''
    idx = 0
    while idx < str1.length
        idx2 = 0
        while idx2 < str1.length
            curr = str1[idx..idx2]
            longest = curr if str2.include?(curr) && curr.length > longest.length
            idx2 += 1
        end
        idx += 1 
    end
    longest
end

str1 = 'cmanatxnum'
str2 = 'rmanatbnum'

# p longest_common_substring(str1, str2)

def sum_rec(arr)
    return arr.first if arr.length == 1
    sum = arr.first
    return sum + sum_rec(arr[1..-1])
end

arr = [1, 2, 3, 4]

# p sum _rec(arr)

# Day 2

# Set A

def fibs(n)
    if n <= 1
        return 0
    elsif n == 2
        return 1
    end

    return fibs(n - 2) + fibs(n - 1) + 1
end

# p fibs(4)

# Set B

def valid_ip?(str)
    return false if str.count('.') != 3

    arr = str.split('.')
    arr.each do |num|
    
        if num.to_i && num != ''
            digit = num.to_i
            return false if digit > 255 || digit < 0 
        else
            return false
        end
    end

    true
end

str1 = '0.0.0.0'
str2 = '255.255.255.255'
str3 = '5.2.h'
str4 = '58.6.9.8'

# p valid_ip?(str1)
# p valid_ip?(str2)
# p valid_ip?(str3)
# p valid_ip?(str4)

def sum_from_file(file)
    sum = 0 
    File.readlines(file).each do |line|
        if line[0] == '#'
            next
        else
            sum += line.match(/\d+/).to_i
        end
    end
    sum
end

file = ''

# p sum_from_file(file)

def shuffle(arr)
    new_arr = arr.dup
    new_arr.each_index do |idx|
        rand_idx = idx + rand(arr.length - idx)
        new_arr[idx], new_arr[rand_idx] = new_arr[rand_idx], new_arr[idx] 
    end
    new_arr
end

arr = [1,2,3,4,5,6,7,8,9]

# p shuffle(arr)

def folding_cipher(str)
    folded_alpha = {}
    alpha = ("a".."z").to_a
    result = ''
    
    alpha.each_with_index do |letter, i|
        folded_alpha[letter] = alpha[(alpha.length - 1) - i]
    end

    str.each_char do |chr|
        result += folded_alpha[chr]
    end

    result
end

str = 'zzz'

# p folding_cipher(str)

# Day 4

#  Set A

def uniq_subs(word)
    result = []
    words = {}
    0.upto(word.length - 1).each do |idx1|
        (idx1).upto(word.length - 1).each do |idx2|
            if words.key?(word[idx1..idx2])
                next
            else
                result << word[idx1..idx2]
            end
            words[word[idx1..idx2]] = true
        end
    end

    result
end

str = 'abcc'

# p uniq_subs(str)

def largest_contigous_subsum(arr)
    max = arr.first || 0
    curr = 0
    arr.each do |num|
        curr += num
        max = curr if curr > max
        curr = 0 if curr < 0
    end
    max
end

p largest_contigous_subsum([5,3,-7,6,4])

# SET B

def silly_years(year)
    result = []
    until result.length == 10
        first = year.to_s[0..1].to_i
        sec = year.to_s[2..-1].to_i
        mid = year.to_s[1..-2].to_i
        result << year if (first + sec) == mid
        year += 1
    end
    result
end

# p silly_years(1978)

def pair_sum(arr, k)
    result = []
    hash = {}
    seen = Set.new
    arr.each_with_index do |num, i|
        hash[num] = i
        result << [(k - num),num] if hash.include?(k - num) && i != hash[k - num] && !(seen.include?(num))
        seen.add(num)
    end

    result
end

arr = [1, 2, -1, -1, -2]
p pair_sum(arr, -1)

def max_unique_psub(str)
    max = str[str.length - 1]
    (str.length - 2).downto(0).each do |idx1|
        next if str[idx1] < max
        
        max = str[idx1] + max
    end
    max
end

str1 = 'abcdef'
str2 = 'abcdefedcba'
str3 = 'algorithms'

# p max_unique_psub(str1)
# p max_unique_psub(str2)
# p max_unique_psub(str3)