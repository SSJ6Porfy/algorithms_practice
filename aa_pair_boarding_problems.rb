# Day 1

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

str = 'zzz'

# p caesar_cipher(str, 1)

# day 2

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