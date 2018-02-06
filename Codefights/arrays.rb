
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


