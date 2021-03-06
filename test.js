
function shuffleArray(arr) {
    let length = arr.length;

    arr.forEach((num, idx) => {
        let rand = idx + (Math.floor(Math.random() * length) - idx);

        let temp = arr[idx];

        arr[idx] = arr[rand];

        arr[rand] = temp;

    });

    return arr;
}

let arr = [1,2,3,4,5,6,7,8,9];

// console.log(shuffleArray(arr));

function foldingCipher(str) {
    let alpha = [];
    let idx = 0;
    for (let i=97;i<123; i++) {
        alpha[idx] = String.fromCharCode(i);
        idx++;
    }
    
    let cipherHash = {};

    for (let j = 0; j < alpha.length; j++) {
        let right = alpha.length - j - 1;
        cipherHash[alpha[j]] = alpha[right];
    }

    let result = "";

    for (let a = 0; a < str.length; a++) {
        result += cipherHash[str[a]];
    }

    return result;
}


let str = "zyx";

// console.log(foldingCipher(str));


function powerNumbers(num) {
    let result = new Set();
    let bound = Math.pow(num, 2);
    let base = 2;
    while (result.size < num) {
        let power = 2;
        while (Math.pow(base,power) < bound) {
            result.add(Math.pow(base, power));
            power += 1;
        }
        base += 1;
    }

    let resultArr = [];

    result.forEach((el) => {
        resultArr.push(el);
    });

    function compare(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }

    return resultArr.sort(compare);
}

// console.log(powerNumbers(20));

class Set {
    constructor() {
        this.store = [];
        this.size = 0;
    }
}

Set.prototype.add = function(el) {
    let idx = this.getIndex(el);
    if (idx === -1) {
        this.store.push(el);
        this.size++;
    } else {
        return null;
    }
};

Set.prototype.delete = function(el) {
    let idx = this.getIndex(el);
    if (idx !== -1) {
        this.store[idx] = null;
        let temp = this.store[this.size - 1];
        this.store[idx] = temp;
        this.store[this.size - 1] = null;
        this.size--;
    } else {
        return null;
    }
};

Set.prototype.getIndex = function(el) {
    for (let idx = 0; idx < this.size; idx++) {
        if (this.store[idx] === el) {
            return idx;
        }
    }
    return -1;
};

// let setty = new Set;

// setty.add(1);
// setty.add(2);
// setty.add(3);
// setty.add(4);
// setty.add(5);
// setty.delete(5);

// console.log(setty.store);
