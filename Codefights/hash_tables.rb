def groupingDishes(dishes)
    
    entrees = {}
    
    ingredients = Hash.new(0)
    
    dishes.each { |dish| entrees[dish[0]] = dish[1..-1] }

    dishes.each do |dish|
        dish[1..-1].each do |ingredient|
            ingredients[ingredient] += 1
        end
    end
    
    result = Hash.new { |h, k| h[k] = [] }
    
    ingredients.each do |key, value|
        if value >= 2
            entrees.each do |k, v|
                result[key] << k if v.include?(key)
            end  
        end
    end
    
    final = []
    result.each do |key, value|
        final << [key] + value.sort
    end
    final.sort
end


def areFollowingPatterns(strings, patterns)
    
    idx = 0
    
    while idx < strings.length
        return false if patterns.index(patterns[idx]) != strings.index(strings[idx])
        idx += 1
    end
    
    true
end

def containsCloseNums(nums, k)
    hash = {}
    
    nums.each_with_index do |num, idx|
        return true if hash.has_key?(num) && (idx - hash[num]) <= k
        
        hash[num] = idx
    end
    
    false
end

def containsCloseNums(nums, k)
    hash = {}
    
    nums.each_with_index do |num, idx|
        return true if hash.has_key?(num) && (idx - hash[num]) <= k
        
        hash[num] = idx
    end
    
    false
end