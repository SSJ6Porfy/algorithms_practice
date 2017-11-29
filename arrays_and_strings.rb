
def unique_string(str)
    letters = {}

    str.each_char do |char|
        return false if letters.has_key?(char)
        letters[char] = true
    end

    true
    # if other data structures weren't allowed
    # one could use a quadratic function to compare chars
    # or sort and compare pairs
end

# str = 'abcdef'
# p unique_string(str)

