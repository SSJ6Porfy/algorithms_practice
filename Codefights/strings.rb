def amendTheSentence(s)
    result = ''
    
    s.each_char do |chr|
        if chr =~ /[A-Z]/
            result += ' ' + chr.downcase
        else
            result += chr
        end
    end
    
    result.downcase.strip
end

def findFirstSubstringOccurrence(s, x)
    arr = kmp_lps(x)
  
    i = 0
    j = 0
  
    while (i < s.length && j < x.length)
      if (s[i] == x[j])
        i += 1
        j += 1
      else
        if (j != 0) 
          j = arr[j - 1]
        else
          i += 1
        end
      end
    end
        
    return i - x.length if (j == x.length)
  
    -1
  end
  
  def kmp_lps(str)
    arr = Array.new(str.length, 0)
    idx = 0
    i = 1
    
    while i < str.length
      if (str[i] == str[idx]) 
        arr[i] = idx + 1
        idx += 1
        i += 1
      else
        if (idx != 0)
          idx = arr[idx - 1]
        else
          arr[i] = 0
          i += 1
        end
      end
    end
    
    return arr
  end

  def classifyStrings(s)
    return 'mixed' if s.include?("???")
    
    v_count = 0
    c_count = 0
    
    s.each_char.with_index do |chr, i|
        chr =~ /[aeiou]/ && chr != '?' ? v_count += 1 : v_count = 0
        chr =~ /[^aeiou]/ && chr != '?' ? c_count += 1 : c_count = 0
        return 'bad' if v_count == 3 || c_count == 5
    end
    
    if s.include?("?")
        a = classifyStrings(s.gsub(/\?/, "a"))
        b = classifyStrings(s.gsub(/\?/, "b"))
        if a == b 
            return a
        end
        return 'mixed'
    end
   return "good" 
end

def textJustification(words, l)
    rows = arr_build(words, l)
    rows.each_with_index do |row, idx|
        count = 0
        
        row.each { |word| count += word.length }
        
        space_count = l - count
        sp = " " * (space_count / (row.size - 1)) unless row.size == 1
        
        if idx == rows.size - 1
            rows[idx] = [row.join(" ")]
            count += (row.size - 1)
            until count >= l
                rows[idx][0] += " "
                count += 1
            end
        else
            if sp && (l - count - (sp.length * (row.size - 1)) == 0)
                rows[idx] = [row.join(sp)]
            else
                i = 0
                while count < l
                    row[i] += " "
                    count += 1
                    i += 1
                    i = 0 if i >= row.size - 1
                end
            end
        end
    end
    rows.map(&:join)
end

def arr_build(arr, len)
    
    queue = []
    result = [[]]
    arr.each { |word| queue << word }
    
    until queue.empty?
        curr = queue.shift
        curr_row = result.last
        
        count = curr_row.size
        chr_count = 0
        if count > 0
            curr_row.each { |word| chr_count += word.length }
        end
        
        spaces = count + chr_count
       
        if spaces + curr.length <= len
            curr_row << curr
        else
            result << [curr]
        end
    end
    
    result
end
