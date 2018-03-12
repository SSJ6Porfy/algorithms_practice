require 'byebug'

def squaresUnderQueenAttack(n, queens, queries)
    return [false] * queries.length if queens.empty?
    
    result = [false] * queries.length

    queries.each_with_index do |q, i|
        queens.each do |queen|
            #row_check
            if !result[i] && q[0] == queen[0]
                result[i] = true
            end
            #col_check
            if !result[i] && q[1] == queen[1]
                result[i] = true
            end
            #diagonal_check
            row_distance = (q[0] - queen[0]).abs 
            col_distance = (q[1] - queen[1]).abs 
            if !result[i] && (row_distance == col_distance)
                result[i] = true
            end
            #right_diag
        end
    end
    result
end

p squaresUnderQueenAttack(5, [[1, 1], [3, 2]], [[1, 1], [0, 3], [0, 4], [3, 4], [2, 0], [4, 3], [4, 0]])

