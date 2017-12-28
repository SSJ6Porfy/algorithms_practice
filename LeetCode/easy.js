var romanToInt = function(s) {
    let romans = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    };
    
    let result = 0;
    let i = 0;
    
    while (i < s.length) {
        let fourOrNine = s.substr(i, 2);
        let single = s[i];
        if (romans[fourOrNine]) {
            result += romans[fourOrNine];
            i += 2;
        } else {
            result += romans[single];
            i += 1;
        }
    }
    
    return result;
};

// console.log(romanToInt("MMCDLVII"));

