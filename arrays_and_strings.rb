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

def is_Permutation?(str1, str2)
    str1.chars.sort.join == str2.chars.sort.join
    # O(log n) complexity
end

ex1 = 'abcdef'
ex2 = 'cbafed'

p is_Permutation?(ex1, ex2)

def urlify(str)
    str.split(' ').join('%20')
end

str = 'Mr John Smith    '
p urlify(str)